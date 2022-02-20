/*global fetch FormData*/
function makeRequest(url, options = {}){
    /*return fetch(url, options).then((response)=>{
        return response.json();
    }).then((data)=>{
        return data;
    });
    */
    return fetch(url, options).then((response)=>{
        if( response.status !== 200){
            return response.text().then((text)=>{
                throw new Error(text); 
            })
        }
        return response.json();
    });
}

async function all() {
    // let response = await serverApi.all();
    // return parseResponse(response)
    // let response = await fetch('/js-frontend-api/articles.php');
    // console.log(response.json());
    let data = await makeRequest('/js-frontend-api/articles.php');
    return data;
}

async function one(id) {
    // let response = await serverApi.get(id);
    // return parseResponse(response);
    let data = await makeRequest(`/js-frontend-api/articles.php?id=${id}`);
    return data;

}



async function remove(id) {
    // let response = await serverApi.remove(id);
    // return parseResponse(response);
    let data = await makeRequest(`/js-frontend-api/articles.php?id=${id}`,{
        method: 'DELETE'
    });
    return data;
}

async function add(article) {
    let formData = new FormData();

    for(let name in article){
        formData.append(name, article[name])
    }
    // let response = await serverApi.get(id);
    // return parseResponse(response);
    let data = await makeRequest(`/js-frontend-api/articles.php`,{
        method: 'POST',
        body: formData
    });
    return data;

}

async function edit(id, article) {
    let forServer = {
        ...article,
        id
    };

    let data = await makeRequest(`/js-frontend-api/articles.php`,{
        method: 'PUT',
        body: JSON.stringify(forServer)
    });
    return data;

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