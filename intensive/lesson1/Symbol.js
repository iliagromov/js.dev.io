/*global Symbol */

let forName = Symbol('name');
let forOther = Symbol('name');

let forPassword = Symbol();
let forPassword1 = "sadasd5asdasd8w7d";

let someuser = {
    firstName: 'Name',
    lastName: 'Last',
    [forPassword]: 445756,
    [forPassword1]: 445756, // динамическая типизация без [] будет строка "forPassword1"
    
}
function someFuncSymbol(){
    
    for(let key in someuser ){
        console.log(`${key}: ${someuser[key]}`)
    }
    console.log(someuser[forPassword]);
    

    let someObj = {
        to: 10,
        [Symbol.iterator]: function(){
            let current = 0;
            let stop = this.to;

            return { 
                next(){
                    // если перебор завершен то указывется ключ done: false
                    if(current <= stop){
                        return{
                            done: false,
                            value: current++
                        }
                    }
                    // если перебор завершен то указывется ключ done: true
                    else {
                        return{
                            done: true
                        }
                    }
                    
                }
            }
        }
    };
    
    for (let some of someObj){
        console.log(some)
    }
    /*
        for of видит отбъект и знает что этот объект должен быть итерируемым 
        первое действие for of он начинае проверять есть ли у него ( у обекта) такой ключ который называется someObj[Symbol.iterator]

        да. у него есть такой ключ.  
        от вызывает функцию, которая лежит по этому ключу
        и получает доступ к объекту, который  мы с функции вернули 
        someObj[Symbol.iterator]() -> {
            next(){...
        }

        и именно с помощью этого объекта и осуществляет пребор
        Как он это делает? 
        Он у вернувшигося объекта каждый раз вызывает метод next
        и смотрит на итоговый результат 
        Если ему вернут из метода next объект {
                           где done равняется true
                        }

        То всё пребор завершен
         Если ему вернут из метода next объект {
             где done равняется false
         }
         то в переменную some попадет ключ value и именно он будет использован внутри тела цикла
         в данном случае это current и в этом случае еще раз будет вызвана функция next

         
    */
}



export {forName, forOther, someFuncSymbol } ;