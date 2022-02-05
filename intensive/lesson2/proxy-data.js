/*global  Proxy*/
let data = {
    a: 1,
    b: 2
}
/*Перехватывает все обращения к объекту целевому */
export default new Proxy(data, {
    get(target, name){
        return target[name];
    },
    set(target, name, value){
        target[name] = value;
        console.log(`set ${name} = ${value}`);
        return true;
    }
})