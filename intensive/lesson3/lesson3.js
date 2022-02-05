import 'babel-polyfill';
import * as BadApi from './api-callback';
import { mathOp } from './math';
import * as PromiseApi from './api-promise';

if (window.location.pathname === "/lesson3.html") {
    window.addEventListener('load', function () {
        // BadApi
        /* BadApi.userReg((res) => {
             console.log(res);
             BadApi.userAuth(res.id, (resAuth) => {
                 console.log(resAuth);
                 BadApi.userData(resAuth.token, (resData) => {
                     console.log(resData);
                 }, (e) => {
                     console.log(e.msg);
                 })
             }, (e) => {
                 console.log(e.msg);
             });
         }, (e) => {
             console.log(e.msg);
         })
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
 */

        //Promise
        /*global Promise */
        /*let some = new Promise(function (resolve, reject) {
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
        })*/

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
        PromiseApi.userReg()
                    .then((regRes)=>{
                        console.log(regRes);
                        return PromiseApi.userAuth(regRes.id);
                    })
                    .then((authRes)=>{
                        console.log(authRes);
                        return PromiseApi.userData(authRes .token);
                    })
                    .then((dataRes)=>{
                        console.log(dataRes);
                    })
                    .catch((e) => {
                        console.log(e.msg)
                    })
    })
} 