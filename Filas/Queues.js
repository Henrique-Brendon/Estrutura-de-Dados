class Queue{
    constructor(){
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    // Inserindo dados
    enqueue(element){
        this.items[this.count] = element;
        this.count++;
    }
    // Removendo dados
    dequeue(){
        if(this.isEmpty()){
            return undefined;
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;
        return result; 
    }
    // Verificando a fila
    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }
    // Verificando se a pilha está vazia e seu tamanho
    isEmpty(){
        return this.count - this.lowestCount === 0;
    }
    size(){
        return this.count - this.lowestCount;
    }
    // Limpar elementos da Fila
    clear(){
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    // Método toString
    toString(){
        if(this.isEmpty()){
            return '';
        }
        let ObjeString = `${this.items[this.lowestCount]}`;
        for(let i = this.lowestCount + 1; i< this.count; i++){
            ObjeString = `${ObjeString},${this.items[i]}`;
        }
        return ObjeString;
    }

}

