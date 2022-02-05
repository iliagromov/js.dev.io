/* global require */
import 'babel-polyfill';

import Timer from './timer';

//можем использовать require, который предоставляется из node  js  пакет common
let counterRequire = require('./require.js');

// можем импортировать все методы и свойства, которые экспортируются
import * as counter2Import from './import';
// можем импортировать какой-то конкретный метод или свойство из модуля
import { inc } from './import';

import forOf from './for-of';

import * as exSymbol from './Symbol';
import { gen } from './generator';

import * as hw from './hw.js';

/*Урок 1 */

if(window.location.pathname === "/lesson1.html"){
    window.addEventListener('load', function () {


        let timer1 = new Timer(document.querySelector('.timer1'), 10);
        console.log(timer1);
    
        /* 
        отличительная особенность require - мы можем переопределить значение переменной
        */
        console.log('start js module');
        counterRequire.cnt = 5;
    
        console.log(counterRequire.cnt);
        counterRequire.inc();
        counterRequire.inc();
        counterRequire.inc();
        console.log(counterRequire.cnt);
    
        /* 
        отличительная особенность import - переопределить значение переменной нельзя
        будет ошибка Uncaught TypeError: setting getter-only property "cnt"
        */
        // counter2.cnt = 5;
        // можем увидеть cnt
        console.log(counter2Import);
        // но num не видим т.к. сделали её приватной частью
    
        console.log(counter2Import.cnt);
        counter2Import.inc();
        counter2Import.inc();
        counter2Import.inc();
        inc();
        console.log(counter2Import.cnt);
        console.log('end js module');
        /*ESLINT 
            нужно указывать все глобальные переменные иначе 
            непосредственно в файле или в .eslintrc -> globals
            достовать методы из глобальной переменной 
            например: 
    
            clearInterval -> window.clearInterval
            иначе будет подсвечена ошибка 
        */
        console.log('start js for of');
        forOf();
    
        console.log('end js for of');
        //
    
        console.log('start Symbol');
        console.log(exSymbol.forName);
        console.log(exSymbol.forOther);
        console.log(exSymbol.forName === exSymbol.forOther);
    
        exSymbol.someFuncSymbol();
        console.log('end Symbol');
        //
    
        console.log('start Generator');
        let someGenerator = gen(1, 5);
    
        for (let some of someGenerator) {
            console.log(some);
        }
        console.log('end Generator');
        console.log('Start hw');
        let str = ' Всем привет ура ура ';
        
        for(let s of hw.getWordsIterator(str)){
            console.log(s);

        }

        // обычная функция
        function exSimpleF(){
            // Что если каждое знначение в массиве расчитывается динамически с помощью ajax?
            return ['a', 'b', 'c'];
            /*когда функция завершит свою работу  на этом этапе let a of exSimpleF()
            то уже все значения ['a', 'b', 'c']; получены и рассчитаны 
            */
           /*значения формируются сразу */
        }


        for(let a of exSimpleF()){
            console.log(a);
        }


        // функция генератор
        function* exGeneratorF(){
            /*
            когда мы выполнили первый оператор yield
            ниже код еще не выполнен 
            когда подходит выполнения yield
            yield закидыввается в переменную g 
            */
            console.log('yield a');
            yield 'a';
            /*
            на следущей итерации цикла заходим сюда и круг повторяется 
            */
            console.log('yield b');
            yield 'b';
            console.log('yield c');
            yield 'c';

        }

        for(let g of exGeneratorF()){
            console.log(g);
        }
        /*
        exGeneratorF.next()
        yield a -> g -> console.log(g);
        exGeneratorF.next()
        yield b -> g -> console.log(g);
        exGeneratorF.next()
        yield c -> g -> console.log(g);
        функция не двинется дальше до тех пор пока мы не вызовем next
        генератор помогает экономить память 
        позволяет управлять порядком выполнения кода
        итератор(next) заставляет функцию притормаживать 
        позволяет притормаживать функицю в yield
        это позволяет нам реализовывать млоский Асинхронный код 

        Пример асинхронного запроса, которые выполняются последовательно и зависят друг от друга
        в первом случае приходится делать цепочку из коллбеков


        получается попадаем в цикл, потом в генератор
         */
        console.log('getWordsGenerator');
        for(let s of hw.getWordsGenerator(str)){
            console.log(s);

        }

        console.log('getWordsGenerator');
        for(let s of hw.getWords(str)){
            console.log(s);

        }


        console.log('End hw');
    })
}

