

/*
Дополнительный интерфейс для выхова таймаута
callback будет написан в then */
function TimeoutPromise(time) {
    return new Promise(function (resolve) {
        window.setTimeout(resolve, time)
    })
}
/*global  Promise*/
/*
function userReg() {
    return new Promise(function (resolve, reject) {
        window.setTimeout(() => {
            try {
                mathOp(1, parseInt(Math.random() * 2), '/ ');
            } catch (e) {
                reject({ msg: e.message })
            }

            if (Math.random() > 0.2) {
                resolve({
                    msg: "+ registration",
                    id: 1
                });
            }
            else {
                reject({ msg: "error in registration" });
            }
        }, 500);
    });

}

function userAuth(id) {
    return new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            if (Math.random() > 0.2) {
                resolve({
                    msg: "+ auth " + id,
                    token: "ghegkjhjewhrklwejo"
                });
            }
            else {
                reject({ msg: "error in auth" });
            }
        }, 500);
    });
}

function userData(token) {
    return new Promise(function (resolve, reject) {
        window.setTimeout(function () {
            if (Math.random() > 0.2) {
                resolve({
                    msg: "+ data by token " + token,
                    data: {
                        id: 1,
                        name: 'Some'
                    }
                });
            }
            else {
                reject({ msg: "error in data" });
            }
        }, 500);
    });
}
*/

/*Сделали промисирование таймаута  */
function userReg() {
    return new Promise(function (resolve, reject) {
        TimeoutPromise(500).then(() => {
            /*try {
                mathOp(1, parseInt(Math.random() * 2), '/ ');
            } catch (e) {
                reject({ msg: e.message })
            }*/

            if (Math.random() > 0.2) {
                resolve({
                    msg: "+ registration",
                    id: 1
                });
            }
            else {
                reject({ msg: "error in registration" });
            }
        });
    });

}

function userAuth(id) {
    return new Promise(function (resolve, reject) {
        TimeoutPromise(500).then(()=>{
            if (Math.random() > 0.2) {
                resolve({
                    msg: "+ auth " + id,
                    token: "ghegkjhjewhrklwejo"
                });
            }
            else {
                reject({ msg: "error in auth" });
            }
        });
    });
}

function userData(token) {
    return new Promise(function (resolve, reject) {
        TimeoutPromise(500).then(() =>{
            if (Math.random() > 0.2) {
                resolve({
                    msg: "+ data by token " + token,
                    data: {
                        id: 1,
                        name: 'Some'
                    }
                });
            }
            else {
                reject({ msg: "error in data" });
            }
        });
    });
}

export { userReg, userAuth, userData };