import 'babel-polyfill';
import Cart from './components/cart';

if (window.location.pathname === "/lesson5.html") {
    window.addEventListener('load', function () {
       
        // let cart = new Cart();
        // this.document.querySelector('.sample').appendChild(cart.render());
    
        (new Cart()).bindMount('.sample').render();
    });
}