/*global HTMLElement */
export class Parody {
    constructor(props){
        
        if(typeof props !== "object"){
            props = {}
        }
        this.props = props;
        this.isMount = false;
        this.targetNode;
    }

    initState(obj){
        this.state = watchObj(obj, this.render.bind(this))
    }

    setState(newState){
        Object.assign(this.state, newState);
        this.render();
    }

    bindMount(selector){
        this.isMount = true;
        this.targetNode = document.querySelector(selector);
        return this;
    }
    render(node){
        // let div = document.createElement('div');
        // div.innerHTML = '1';
        // return div;
        if(this.isMount){
            this.targetNode.innerHTML = '';
            this.targetNode.appendChild(node);
        }
        return node;
    }
}
/*
export function createNode(tagName, props){
    let node = document.createElement(tagName);

    for(let name in props){
        node[name] = props[name];
    }


    return node;

}*/

export function ParodyDom(tagName, props, ...childrens){
    if(typeof tagName === "function"){
        return (new tagName(props).render());
    }

   
    
    let node = document.createElement(tagName);

    function addChildren(child){
        if(child instanceof HTMLElement){
            node.appendChild(child);
        }
        else if(typeof child === "object"){
            for(let elem of child){
                addChildren(elem);
            }
            
        }
        else{
            let textNode = document.createTextNode(child);
            node.appendChild(textNode);
        }
    }

    console.log(tagName);
    console.log(props);
    console.log(childrens);
    // let fragment = document.createDocumentFragment();
    
    childrens.forEach((child)=>{
        addChildren(child);
    });
  
    Object.assign(node, props);


    return node;

    // console.log(tagName);
    // console.log(props);
    // console.log(childrens);

}

/*global Proxy */

function watchObj(node, callback){
    let reactiveFunctions = {
        push: true,
        pop: true,
        splice: true,
        slice: true,
        shift: true,
        unshift: true,
        sort: true
    }
    return new Proxy(node, {
        get(target, name){
            switch(typeof target[name]){
                case 'object':
                    return watchObj(target[name], callback);
                case 'function':
                    if(name in reactiveFunctions){
                        return function(...args){
                            let res = target[name].apply(target, args );
                            callback();
                            return res;
                        }
                    }
                    else{
                        return target[name].bind(target);
                    }
                    
                default:
                    return target[name];
            }
        },

        set(target, name, value){
            target[name] = value;
            callback(name, value);
            return true;
        },
        
    });
}