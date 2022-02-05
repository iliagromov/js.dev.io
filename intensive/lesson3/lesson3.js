import 'babel-polyfill';
import * as BadApi from './api-callback';
import { mathOp } from './math';
import * as PromiseApi from './api-promise';
import { asyncSequence } from './async-generator';
import * as GoodApi from './api-promise';
import * as AsyncApi from './api-async';


if (window.location.pathname === "/lesson3.html") {
    window.addEventListener('load', function () {
        // BadApi
        console.log('start BadApi');
        BadApi.userReg((res) => {
            console.log('BadApi');
            console.log(res);
            BadApi.userAuth(res.id, (resAuth) => {
                console.log('BadApi');
                console.log(resAuth);
                BadApi.userData(resAuth.token, (resData) => {
                    console.log('BadApi');
                    console.log(resData);
                }, (e) => {
                    console.log('BadApi');
                    console.log(e.msg);
                })
            }, (e) => {
                console.log('BadApi');
                console.log(e.msg);
            });
        }, (e) => {
            console.log('BadApi');
            console.log(e.msg);
        })
        console.log('end BadApi');
        console.log('start mathRun');
        function mathRun() {
            try {
                let a = mathOp(1, 2, '+') + mathOp(1, 0, '/');
                console.log(a);
                return a;
            }
            catch (e) {
                console.log(e.message);
                console.log(e.stack);
            }
            finally {
                console.log('math finally');
            }
            console.log('math done');
        }
        mathRun();
        console.log('end mathRun');


        //Promise
        /*global Promise */
        console.log('start Promise');
        let some = new Promise(function (resolve, reject) {
            window.setTimeout(() => {
                let num = Math.random();
                num > 0.5 ? resolve(num) : reject(`${num} less then 0.5`);
            }, 200);
        })

        console.log(some) // panding

        some.then((result) => {
            // console.log(result)
            console.log('good ' + result)
        }, (error) => {
            console.log(error)
        })
        console.log('end Promise');


        /*Так промисы не используем! смысла нет. аналог с callback */
        /* PromiseApi.userReg().then((res) => {
             console.log(res);
             PromiseApi.userAuth(res.id).then((resAuth) => {
                 console.log(resAuth);
             })
         }, (error) => {
             console.log(error.message)
         }
         )*/

        console.log('start PromiseApi');
        PromiseApi.userReg()
            .then((regRes) => {
                console.log('PromiseApi');
                console.log(regRes);
                return PromiseApi.userAuth(regRes.id);
            })
            .then((authRes) => {
                console.log('PromiseApi');
                console.log(authRes);
                return PromiseApi.userData(authRes.token);
            })
            .then((dataRes) => {
                console.log('PromiseApi');
                console.log(dataRes);
            })
            .catch((e) => {
                console.log('PromiseApi')
                console.log(e.msg)
            })
        console.log('end PromiseApi');

        console.log('start generator userProcess');
        function* userProcess(){
            let a = yield GoodApi.userReg();
            console.log('generatorApi');
            console.log(a);
            let b = yield GoodApi.userAuth(a.id);
            console.log('generatorApi');
            console.log(b);
            let c = yield GoodApi.userData(b.token);
            console.log('generatorApi');
            console.log(c);
        }
        asyncSequence(userProcess())
        console.log('end generator userProcess');

        console.log('start  AsyncApi');
        AsyncApi.userReg()
            .then((regRes) => {
                console.log('AsyncApi');
                console.log(regRes);
                return AsyncApi.userAuth(regRes.id);
            })
            .then((authRes) => {
                console.log('AsyncApi' );
                console.log(authRes);
                return AsyncApi.userData(authRes.token);
            })
            .then((dataRes) => {
                console.log('AsyncApi');
                console.log( dataRes);
            })
            .catch((e) => {
                console.log('AsyncApi')
                console.log( e.message)
            })
        console.log('end  AsyncApi');

        async function UserProcess(){
            /* await остановит выполнения кода как yeild
            AsyncApi.userReg() -> вернет промис а await, дождётся когда выполнится промис и вернет его результат 

            */
            let regRes = await AsyncApi.userReg();
            console.log('UserProcess');
            console.log(regRes);
            let authRes = await AsyncApi.userAuth(regRes.id);
            console.log('UserProcess');
            console.log(authRes);
            let dataRes = await AsyncApi.userData(authRes.token);
            console.log('UserProcess');
            console.log(dataRes);
            return dataRes;
        }
        UserProcess().then((data)=>{
            console.log('UserProcess');
            console.log(data);
        }).catch((err)=>{
            console.log(err.message);
        });
        console.log('end  AsyncApi');



    })
} 