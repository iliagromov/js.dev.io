function makeRequest(url, options = {}){
    return fetch(url, options).then((response)=>{
        return response.json();
    }).then((data)=>{
        return data;
    })
}

async function all() {
    // let response = await serverApi.all();
    // return parseResponse(response)
    let response = await fetch('/js-frontend-api/articles.php');
    console.log(response.json());
}

async function one(id) {
    // let response = await serverApi.get(id);
    // return parseResponse(response);

}

async function remove(id) {
    // let response = await serverApi.remove(id);
    // return parseResponse(response);
}

export { all, one, remove };



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