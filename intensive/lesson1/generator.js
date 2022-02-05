/*
Когда создается функция генератор 
она автоматически создает итерируемый объект
объявляется как function* || function *gen

Функция генератор сама создаст объект по аналогии с someObj

*/
export function* gen(from, to){
    for(let i = from; i <= to; i++){
        console.log('yield');
        yield i;
    }
    
}

function getNumeral(number, discharge){
    return parseInt((number % discharge) / (discharge / 10));
}

export function* getDischarges(number){
    let divider = 10;

    while(number % divider !== number){
        yield getNumeral(number, divider);
        divider *= 10;
    }
    
    yield getNumeral(number, divider);
}

/*
yield выбрасывает промежуточный результат

yield возвращает занчение итератора 
Пример
function* gen(from, to){
    yield 1;
    yield 2;
    yield 3;
}

next -> value: 1, done: false,
next -> value: 2, done: false,
next -> value: 3, done: false,
next -> done: true,
                        
мы обходим стороной логику написания [Symbol.iterator]

Мы используем генератор чтобы добиться решения данной задачи

Функция генератор налету содает итериромый объект
*/