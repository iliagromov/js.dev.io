import 'babel-polyfill';
import * as ArticlesModel from './articles';
 
if (window.location.pathname === "/lesson5-ajax.html") {
    window.addEventListener('load', function () {
        async function testArticlesModel() {
            let articles = await ArticlesModel.all();
            console.log('articles count = ' + articles.length);
           
            // берём случайный индекс
            let ind = Math.floor(Math.random() * articles.length);
            console.log('select index ' + ind + ', id = ' + articles[ind].id)

            // получаем статью по id
            let article = await ArticlesModel.one(articles[ind].id);
            console.log(article);
        
            // пробуем удалить её

            let removeRes = await ArticlesModel.remove(article.id);
            console.log('что с удалением? - '+removeRes);

            let articlesNewList = await ArticlesModel.all();
            console.log('articles count = ' + articlesNewList.length);
           

            let addRes = await ArticlesModel.add({
                title: article.title + '+ add ',
                content: article.content + '+ add ',
            });
            console.log('что с удалением? - ' + addRes);

            let articlesNewsList = await ArticlesModel.all();
            console.log('articles count = ' + articlesNewsList.length);
           
            // берём случайный индекс
            let indNew = Math.floor(Math.random() * articlesNewsList.length);
            let articleNew = articlesNewsList[indNew];
            console.log('select index ' + indNew + ', id = ' + articleNew.id)

            let editRes = await ArticlesModel.edit(articleNew.id, {
                title: article.title + '+ add ',
                content: article.content + '+ edit ',
            });
            console.log('что с редактированием? - '+editRes);

        }




        testArticlesModel().then(()=>{
            
        }).catch((e)=>{
            // this.document.querySelector('body').innerHTML = `<p>${e.message}</p>`;
            console.log(e);
        });
    });
}