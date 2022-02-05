let objOne = {
    i: 2,
    double: function () {
        return this.i * this.i;
    }
}

function double(n, m) {
    return this.i * this.i * n * m;
}

let doubleF = (n, m) => {
    /*
     ^
     |
    this ссылается вверх 
    
    */
   return this.i * n * m;
}
let doubleFF = (function(n, m ){
    return this.i * n * m;
}).bind(this);

export { objOne, double,doubleF, doubleFF }
