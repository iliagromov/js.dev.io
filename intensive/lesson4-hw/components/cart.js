import { Parody, ParodyDom } from "../parady";
import InputNumber from "./input-number";

export default class Cart extends Parody {
    constructor(props) {
        super(props);
       /* this.state = {
            products: [
                { price: 1000, rest: 10, current: 1 },
                { price: 2000, rest: 5, current: 2 },
            ]
        }*/
        this.initState({
            products: [
                { price: 1000, rest: 10, current: 1 },
                { price: 2000, rest: 5, current: 2 },
            ]
        })
    }

   /* onChange = (val) => {
        console.log(val + ' in parent');
        console.log(this);
    } */
    onChange (ind, val){
        this.state.products[ind].current = val;
        console.log(this.state); 
        this.render();
    }
    onAdd = () => {
        // let products = this.state.products;
        /*let products = [...this.state.products,{
            price: 500,
            rest: 20,
            current: 1
        }];
        // products.push({});
        this.setState({products});*/

        this.state.products.push({
            price: 500,
            rest: 20,
            current: 1
        });
    }
    onRemove(ind){
        
       /* let products = [...this.state.products];
        products.splice(ind, 1);

        this.setState({
            products
        })*/

        this.state.products.splice(ind, 1);
    }
    render() {
        let summary = this.state.products.reduce((total, item) => {
            return total + item.price * item.current;
        }, 0);

        // let prod = this.state.products;
        
        let inputs = this.state.products.map((item, i)=>{
            return (<div><InputNumber 
                            min={1} 
                            max={item.rest} 
                            value={item.current}
                                change={this.onChange.bind(this, i)}/>
                            <input type="button" value="x" onclick={this.onRemove.bind(this,i)} />
                            <hr/>
                            
                    </div>);
        });
        
        return super.render(
            <div>
                {/*<InputNumber min="1" max={prod[0].rest} value={prod[0].current}
                    change={this.onChange.bind(this, 0)}/>
                <InputNumber min="1" max={prod[1].rest} value={prod[1].current}
                    change={this.onChange.bind(this, 1)}/>*/}
                    {inputs}
                <hr/>
                <input type="button" value="+" onclick={this.onAdd} />
                <hr/>

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