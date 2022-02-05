let objGetters = {
    _privte: {
        cnt: 3,
    },
    min: 1,
    max: 10
}
/**
 перехватчики, которые работают в разные моменты времени

 */
Object.defineProperty(objGetters, 'cnt', {
    // writable: false,
    // value: 10,
    get(){
        console.log('getter');
        return this._privte.cnt;
    },
    set(value){
        if(value < this.min){
            value = 1;
        }
        else if(value >= this.max){
            value = this.max;
        }
        console.log('setter', value);
        this._privte.cnt = value;
    }
})
export {objGetters } ;