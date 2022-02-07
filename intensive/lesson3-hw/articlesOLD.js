import * as serverApi from './db';

async function all(){
    let response = await serverApi.all();
    return parseResponse(response)
}

function one(id, onSuccess, onError){
    serverApi.get(id, (response) => {
        let info = JSON.parse(response);

        if(info.code === 200){
            onSuccess(info.data);
        }
        else{
            onError(info.status);
        }
    });
}

function remove(id, onSuccess, onError){
    serverApi.remove(id, (response) => {
        let info = JSON.parse(response);

        if(info.code === 200){
            onSuccess(info.data);
        }
        else{
            onError(info.status);
        }
    });
}

export {all, one, remove};

function parseResponse(text){
    let response = JSON.parse(text);
    return response.data;
}