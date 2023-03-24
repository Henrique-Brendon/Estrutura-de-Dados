// Pilha baseada em objeto
class Stack{
    constructor(){
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count ++;
    }
    size(){
        return this.items;
    }
    isEmpty(){
        return this.items.count === 0;
    }
    pop(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count --;
        const result = this.items[this.count];
        delete this.items[this.count];
    }
    peek(){
        if(this.isEmpty()){
            return undefined
        }
        return this.items[this.count -1];
    }
    clear(){
        while(!this.isEmpty()){
            this.pop();
        }
        this.items = {};
        this.count = 0;

    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[0]}`;
        for(let i = 1; i<this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }

}