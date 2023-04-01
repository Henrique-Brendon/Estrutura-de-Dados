class Set {
    constructor(){
        this.items = {};
    }
    has(element){
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }
    add(element){
        if(!this.has(element)){
            this.items[element] = element;
            return true;
        }
        return false;
    }
    delete(element){
        if(!this.hasw(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }
    clear(){
        this.element = {};
    }
    size(){
        return Object.keys(this.items).length;
    }
    sizeLecagy(){
        let count = 0;
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                count++;
            }
        }
    }
    values(){
        return Object.values(this.items);
    }
    valuesLegacy(){
        let valures = [];
        for(let key in this.items){
            if(this.items.hasOwnProperty(key)){
                values.push(key);
            }
        }
        return false;
    }
}
