import { Parody, ParodyDom } from "../parady";
// import InputNumber from "./input-number";

export default class Cart extends Parody {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                { price: 1000, rest: 10, current: 1 },
                { price: 2000, rest: 5, current: 2 },
            ]
        }
    }

   /* onChange = (val) => {
        console.log(val + ' in parent');
        console.log(this);
    }*/
    onChange (ind, val){
        this.state.products[ind].current = val;
        console.log(this.state); 
        this.render();
    }
    render() {
        let summary = this.state.products.reduce((total, item) => {
            return total + item.price * item.current;
        }, 0);
        return super.render(
            <div>
                <InputNumber/>
                {summary}
            </div>
        );
/*
        let div = document.createElement('div');
        this.state.products.forEach((item, i) => {
            let inp = (new InputNumber({
                min: 1,
                max: item.rest,
                value: item.current,
                change: this.onChange.bind(this, i) //карриг i
            })).render();
            div.appendChild(inp);
        });

        let summary = document.createElement('div');
        summary.innerHTML = this.state.products.reduce((total, item) => {
            return total + item.price * item.current;
        }, 0);
        div.appendChild(summary);
        // return div;
        
        return super.render(div);*/
    }
}