export default class {
    constructor(el, time){
        this.el = el;
        this.time = time;
        this._interval;

        this.render();
        this.start();
    }

    /* 
    Тема с контекстом 
    Можно задавать метод несколькими способами 
    start(){
        
    }
    
    
    tick = () => {
        у стрелочной функции нет своего контекста, контекст берется выше 
        Можно ли привязать контекст у стрелочной функции? 
    }

    */
  
    start = () => {
        this._interval = window.setInterval(this.tick, 1000);
    }

    stop(){
        window.clearInterval(this._interval);
    }

    tick = () => {
        this.time--;
        this.render();

        if(this.time <= 0){
            this.stop();
        }
    }

    render(){
        this.el.innerHTML = this.time;
    }
}

