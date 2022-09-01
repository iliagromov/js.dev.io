import axios from "axios";

let server = axios.create({
  // baseURL: '/test_main'
  baseURL: '/js-frontend-api'
});

server.interceptors.request.use(function(request){
  // if(localStorage.getItem('token'))
  // request.headers.Autorization = '50537266ded1d3eb1e6923f7f4b2f484';
  // request.headers["WWW-Authenticate"] = '50537266ded1d3eb1e6923f7f4b2f484';
  return request;
});

server.interceptors.response.use(function(response){
  // if(localStorage.getItem('token'))
  
  if(response.status !== 200){
    throw new Error(response.data);
  }
  // if(typeof response.data !== 'object'){
  //   throw new Error('we did not get json object from server ');
  // }

  return response;
});

export default server;