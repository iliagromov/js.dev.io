import 'babel-polyfill';
import * as context from './context.js';
import Timer from './timer';
import * as getters from './getters';
// import VueGetters from './vue-getters';
import VueGetters from './vue-proxy';
import data from './proxy-data';
import {watchObj, EmailParser} from './hw';

if (window.location.pathname === "/lesson2.html") {
    window.addEventListener('load', function () {

        console.log('start context');
        console.log(context.objOne.double());
        console.log('call');
        console.log(context.double.call(context.objOne, 3, 2));
        console.log('==');
        console.log('apply');
        console.log(context.double.apply(context.objOne, [3, 2]));
        console.log('==');
        // double(3, 2) - this -> some
        // function.bind(context) -> new_function = const 
        // bind намертво прикреплят тот контекст, который мы попросили прикрепить

        /*
        стрелочная функция тоже самое, что функция на 100% прикрепленная с this
        */
        let timer1 = new Timer(document.querySelector('.timer1'), 10);
        console.log(timer1);

        let double2 = context.double.bind(context.objOne); // возвращается новая функция 

        console.log('bind');
        console.log(double2);

        console.log(double2(3, 2));

        console.log(double2.call(null, 3, 2));

        // let double3 = context.doubleF.bind(context.objOne);
        // console.log('bind double3');
        // console.log(double3);
        // console.log(double3(3, 2));
        /*
        Важно для заBindenoi func and arrow function не будет работать call, apply
   _this is undefined
        */
        /*
        Функция bind может принемать больше одного параметра 
         карринг это мы жестко задаём параметры и не даем возможности их изменять
         карринг для создания дочерних функций с фиксированными параметрами 
         
        */
        console.log('end context');

        console.log(context.double.call(context.objOne, 3, 2));
        let double3 = context.double.bind(context.objOne, 3);
        console.log(double3()); //nan
        console.log(double3(1, 1)); //12


        console.log('task 1');
        // for (var i = 0; i < 5; i++) {
        //     this.setTimeout(function () {
        //         console.log(i); //5
        //     }, i * 200);
        // }
        // карринг
        // for (var i = 0; i < 5; i++) {
        //     this.setTimeout((function (i) {
        //         console.log(i); //12345
        //     }).bind(null, i), i * 200);
        // }
        // console.log('task 2');
        // по замыканию 5 разных перемнных 
        // for (let i = 0; i < 5; i++) {
        //     this.setTimeout(function () {
        //         console.log(i); //5
        //     }, i * 200);
        // }
        console.log('start getters');
        console.log(getters.objGetters.cnt);
        getters.objGetters.cnt = 5;
        console.log(getters.objGetters.cnt);
        getters.objGetters.cnt = -10;
        console.log(getters.objGetters.cnt);
        getters.objGetters.cnt = 100;
        console.log(getters.objGetters);
        console.log('end getters');
        console.log('start VueGetters');
        let vg = new VueGetters({
            el: '.elem1',
            data: {
                clicks: 1,
                name: 'Some!'
            },
            template: `<div><h2>{{ clicks }}</h2>{{ name }}</div>`
        });
        document.querySelector('.elem1').addEventListener('click', function () {
            vg.data.clicks++;
        });

        // Proxy 
        console.log('start Proxy');

        console.log(data.a)
        data.a = 5
        console.log(data.a)
        console.log('end Proxy');
        //

        let parser = new EmailParser('info@ntschool.ru');
        console.log(parser.name);
        console.log(parser.domain);
        console.log(parser.isCorrect);

        parser.email = 'some@nz';
        console.log(parser.name);
        console.log(parser.domain);
        console.log(parser.isCorrect);

        let div = document.createElement('div');
        document.body.appendChild(div);

        let cleverDiv = watchObj(div, function (prop, val) {
            console.log(prop, val);
        });

        cleverDiv.innerHTML = '<strong>HTML</strong><em>Changed</em>';
        /* 
            в консоли: 
            innerHTML <strong>HTML</strong><em>Changed</em
        */
        console.log(cleverDiv.innerHTML);
        cleverDiv.style.color = 'red';
        /* 
            весь текст стал красным
            в консоли: 
            color red
        */

        cleverDiv.querySelector('em').style.color = 'green';
        /* 
            em стал зелёным
            в консоли ничего не добавилось
        
            // популярная ошибка Illegal invocation - из-за манипуляций у функции сломался this
        */

        cleverDiv.classList.add('some');

    });
}