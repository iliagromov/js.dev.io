export let cnt = 0;
export function inc(){
    cnt++;
}

let num = 0;

function inc2(){
    num++;
}
function get(){
    return num;
}
export {inc2, get}