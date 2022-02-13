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
    console.log(tagName);
    console.log(props);
    console.log(childrens);
    // let fragment = document.createDocumentFragment();
    
    childrens.forEach((child)=>{
        if(child instanceof HTMLElement){
            node.appendChild(child);
        }
        else{
            let textNode = document.createTextNode(child);
            node.appendChild(textNode);
        }


    })
  
    Object.assign(node, props);


    return node;

    // console.log(tagName);
    // console.log(props);
    // console.log(childrens);

}