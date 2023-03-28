class Deque{
    constructor(){
        this.count = 0;
        this.lowestCount= 0;
        this.items = {};
    }
    // Adiciona um elemento na frente do deque
    addFront(element){
        if(this.isEmpty()){
            this.addBack(element);
        } else if(this.lowestCount > 0){
            this.lowestCount--;
            this.items[this.lowestCount] = element;
        } else {
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[i-1];
            }
        }
        this.count++;
        this.lowestCount = 0;
        this.items[0] = element;
    }
    // Adiciona um elemento no final do deque
    addBack(element){
        this.items[this.count] = element;
        this.count++;
    }
    // Remove um elemento na frente do deque
    removeFront(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result;
    // Remove um elemento no final do deque
    }
    removeBack(){
        if(this.isEmpty()){
            return undefined;
        }
        this.count--;
        const result = this.items[this.count];
        delete this.items[this.count];
        return result;
    }
    // Olha o elemento na frente do deque
    peekFront(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    // Olha o elemento no final do deque
    peekBack(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1];
    }
    // Verifica se o elemento está vazio
    isEmpty(){
        return this.count - this.lowestCount === 0;
    }
    // Verifica o tamanho do elemento
    size(){
        return this.count - this.lowestCount;
    }
    // Limapr o objeto
    clear(){
        this.items = {};
        this.count = 0;
        this.lowestCount;
    }
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let objString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i < this.count; i++){
            objString = `${objString},${this.items[i]}`;
        }
        return objString;
    }
}
