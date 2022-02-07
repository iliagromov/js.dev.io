import { Parody, ParodyDom } from "../parady";

export default class InputNumber extends Parody {
    constructor(props) {
        super(props);
        this.onChange = ('change' in props) ? props.change : function () { };
    }
    _normalizeValue(val) {
        let newValue = parseInt(val);
        if (isNaN(newValue) || newValue < this.props.min) {
            newValue = this.props.min;
        }
        else if (newValue > this.props.max) {
            newValue = this.props.max;
        }
        // console.log(newValue);
        this.onChange(newValue);

    }
    render() {
        
       
       /* let min = document.createElement('input');
        min.setAttribute('type', 'button');
        min.value = '-';
        min.addEventListener('click', () => {
            this._normalizeValue(this.props.value - 1);
           
        });*/

        /*let min = createNode('input', {
            type: 'button',
            value: '-',
            onclick: () => {
                this._normalizeValue(this.props.value - 1);  
            },
            className: 'inputNumber__min'
        });*/
        /*

        let max = document.createElement('input');
        max.setAttribute('type', 'button');
        max.value = '+';
        max.addEventListener('click', () => {
            this._normalizeValue(this.props.value + 1);
        });

        let num = document.createElement('input');
        num.classList = 'inputNumber__value';
        num.setAttribute('type', 'text');
        num.value = this.props.value;
        num.addEventListener('change', (e) => {
            this._normalizeValue(e.target.value);
            // console.log(e.target.value);
        });

        let root = document.createElement('div');
        root.appendChild(min);
        root.appendChild(num);
        root.appendChild(max);
        // return root;
        */
        // return super.render(root);
        return super.render(
            <div className="">
                <input type="button" 
                    value="-" 
                    onclick={
                        () => {
                            this._normalizeValue(this.props.value - 1);
                           
                        }
                    }  
                    className="inputNumber__min"/>
            
                <input type="text" 
                    value={this.props.value} 
                    onchange={
                        (e) => {
                            this._normalizeValue(e.target.value);
                            // console.log(e.target.value);
                        }

                    } 
                    className="inputNumber__value"/>
            <input type="button" 
                    value="+" 
                    onclick={
                        () => {
                            this._normalizeValue(this.props.value + 1);
                        }
                    }  
                    className="inputNumber__max"/>
            
            </div>
        )
    }
}