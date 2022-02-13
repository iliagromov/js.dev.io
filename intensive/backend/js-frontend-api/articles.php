<?php
  echo 'Articltes API';
  $articles = json_decode(file_get_contents('data/articles'), true);
  $articlesAI = (int)file_get_contents('data/ai');

  switch($_SERVER['REQUEST_METHOD']){
    case 'GET':
      if(isset($_GET['id'])){
        if(isset($articles[$_GET['id']])){
          $res = $articles[$_GET['id']];
        }
        else{
          $res = 'article not found';
        }
      }
      else{
        $res = array_values($articles);
      }
      break;
    case 'POST':
      $articles[++$articlesAI] = [
        'id' => $articlesAI,
        'title' => $_POST['title'],
        'content' => $_POST['content'],
        'dt' => date('Y-m-d H:i:s')
      ];

      file_put_contents('data/ai', $articlesAI);
      $res = $articlesAI;
      break;
    case 'PUT':
      $str = file_get_contents('php://input');
      $put = json_decode($str, true);
      $res = $put['id'];

      if(isset($articles[$put['id']])){
        $articles[$put['id']]['title'] = $put['title'];
        $articles[$put['id']]['content'] = $put['content'];
        $res = true;
      }
      else{
        $res = 'article not found';
      }
      break;
    case 'DELETE':
      if(isset($_GET['id']) && isset($articles[$_GET['id']])){
        unset($articles[$_GET['id']]);
        $res = true;
      }
      else{
        $res = 'can`t remove article';
      }
      break;
    default:
      $res = 'incorrect HTTP-method';
  }
  
  file_put_contents('data/articles', json_encode($articles));

  echo json_encode($res);
  ?>