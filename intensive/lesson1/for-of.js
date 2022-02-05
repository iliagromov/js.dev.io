
let arrForOF = [100, 200, 300];

/* 
   Этот метод всего у чего есть Sumbol.iterator
*/

function forOf() {
    for (let num of arrForOF) {
        console.log(num)
    }

    for (let l of 'hello') {
        console.log(l)
    }
}

export default forOf;