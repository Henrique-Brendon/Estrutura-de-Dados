// Pilha Baseada em Array
class Stack{
    constructor(){
        this.items =  [];
    }
    push(element){
        this.items.push(element);
    }
    pop(){
        return this.items.pop();
    }
    peek(){
        return this.items[this.items.length - 1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length
    }
    clear(){
        this.items = [];
    }
    
}
const stack = new Stack();

console.log(stack.isEmpty());

stack.push(1);
stack.push(3);
stack.push(4);
console.log(stack.isEmpty());
console.log(stack.peek());

stack.push(20);
stack.pop();
stack.pop();
console.log(stack.peek());

stack.clear();
console.log(stack.isEmpty());
