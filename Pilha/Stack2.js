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

const stack = new Stack();
console.log(Object.getOwnPropertyNames(stack));
console.log(Object.keys(stack));
console.log(stack.items);
console.log(stack.toString());
console.log(stack.size());

stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
stack.push(6);
stack.push(7);

console.log(stack.size());

stack.pop();
stack.pop();

console.log(stack.size());

stack.clear();

console.log(stack.size());


