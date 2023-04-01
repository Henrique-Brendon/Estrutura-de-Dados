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


function palindromeCheker(aString){
    if(aString === undefined || aString === null || aString !== null && aString.lenght === 0){
        return false;
    }
    const deque = new Deque();
    const lowerString = aString.toLocaleLowerCase().split(' ').join('');
    let isEqual = true;
    let firstChar, lastChar;
    for(let i = 0; i <lowerString.lenght; i++){
        deque.addBack(lowerString.charAt(i));
    }
    while(deque.size() > 1 && isEqual){
        firstChar = deque.removeFront();
        lastChar = deque.removeBack();
        if(firstChar !== lastChar){
            isEqual == false;
        }
    }
    return isEqual;
}

console.log('a', palindromeCheker('a'));
console.log('aa', palindromeCheker('aa'));
console.log('kaique', palindromeCheker('kaique'));
console.log('rasengan', palindromeCheker('rasengan'));
console.log('manoBrow, 2pac, notorius big e raffa moreira brow', palindromeCheker('manoBrow, 2pac, notorius big e raffa moreira brow'));
/*const deque = new Deque();
console.log(deque.isEmpty());
deque.addBack('Anna');
deque.addBack('Mario');
deque.addBack('Ednaldo Pereira');
console.log(deque.size());
console.log(deque.toString());
console.log('-----')

deque.addFront('Henrique');
console.log(deque.toString());
deque.removeFront();
console.log(deque.toString());
deque.removeBack();
console.log(deque.toString());
console.log('-----')

console.log(deque.peekBack());
deque.clear();

console.log(deque.size());
console.log(deque.toString()); */