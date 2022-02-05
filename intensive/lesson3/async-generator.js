/*Итератор возвращает объект у которого есть 2 ключа done, value */
export function asyncSequence(generator, prevValue) {
    let current = generator.next(prevValue);
    if (!current.done) {
        /*Каждый next будет отрабатывать только после того как предыдущий promise завершится  */
        current.value.then((res) => {
            asyncSequence(generator, res);
        }).catch((err) => {
            generator.throw(err);
        })
    }
}
/*
Если у нас генератор обрабатывается такой функцией, 
которая рекурсивно запускает следующую итерацию, 
только тогда когда выполнится промис с предыдущей
*/