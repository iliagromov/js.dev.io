import server from "./server";

/*global FormData*/
// function makeRequest(url, options = {}){
//     if(!('headers' in options)){
//         options.headers = {};
//     }

//     options.headers.Autorization = '50537266ded1d3eb1e6923f7f4b2f484';
//     /*return fetch(url, options).then((response)=>{
//         return response.json();
//     }).then((data)=>{
//         return data;
//     });
//     */
//     return fetch(url, options).then((response)=>{
//         if( response.status !== 200){
//             return response.text().then((text)=>{
//                 throw new Error(text); 
//             })
//         }
//         return response.json();
//     });
// }

async function all() {
    // let response = await serverApi.all();
    // return parseResponse(response)
    // let response = await fetch('/js-frontend-api/articles.php');
    // console.log(response.json());

    // let data = await makeRequest('/js-hw-api/articles.php');
    let response = await server.get('/articles.php');
    console.log(response);
    return response.data;
}

async function one(id) {
    // let response = await serverApi.get(id);
    // return parseResponse(response);
    let response = await server.get(`articles.php`, {
        params: {id}
    });
    return response.data;

}



async function remove(id) {
    // let response = await serverApi.remove(id);
    // return parseResponse(response);
    let response = await server.delete(`articles.php`,{
        params: {id}
    });
    return response.data;
}

async function add(article) {
    let formData = new FormData();

    for(let name in article){
        formData.append(name, article[name])
    }
    // let response = await serverApi.get(id);
    // return parseResponse(response);
    let response = await server.post(`articles.php`,formData);
    return response.data;

}

async function edit(id, article) {

    let response = await server.put(`articles.php`, {...article, id });
    return response.data;

}

export { all, one, remove, add, edit };



// function parseResponse(text) {
//     try {
//         let response = JSON.parse(text);
//         if (response !== 200) {
//             throw new Error('Код ответа не 200');
//         }

//         return response.data;

//     } catch (e) {
//         throw new Error('Некорректный формат ответ от сервера');
//     }

// }

/*
    GET articles.php -> все статьи в виде массива
    GET articles.php?id=int -> одна статья в виде объекта || 404
    POST articles.php body-formData(title, content) -> id || validation errors
    DELETE articles.php?id=int  -> true || false
    PUT articles.php body-json -> true || false
*/