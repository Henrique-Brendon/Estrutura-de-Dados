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
        if(this.has(element)){
            delete this.items[element];
            return true;
        }
        return false;
    }
    clear(){
        this.items = {};
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
    //  Método Union
    union(otherSet){
        const unionSet = new Set();
        this.values().forEach(values => unionSet.add(values));
        otherSet.values().forEach(values => unionSet.add(values));
        return unionSet;
    }
}
/*const set = new Set();
set.add('Agostinho');
console.log(set.values());
console.log(set.has('Agostinho'));
console.log(set.size());

set.add('Maria');
set.add('José');
set.add('Rafael');
console.log(set.values());
console.log(set.has('JOsé'));  
console.log(set.has('José'));
console.log(set.size());

set.delete('José');
set.delete('Agostinho');
console.log(set.values());

set.clear();
console.log(set.values()); */

var setA = new Set();
setA.add('Naruto');
setA.add('Sasuke');
setA.add('Kakashi');
var setB = new Set();
setB.add('Sakura');
setB.add('Hinata');
setB.add('Kakashi');
const unionAB = setA.union(setB);
console.log(unionAB.values());
