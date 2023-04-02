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
    // Método de intersecção
    intersection(otherSet){
        const intersectionSet = new Set();
        const values = this.values();
        const otherValues = otherSet.values();
        let biggerSet = values;
        let smallerSet = otherValues;
        if(otherValues.length - values.length > 0){
            biggerSet =  otherValues;
            smallerSet =  values;
        }
        smallerSet.forEach(values => {
            if(biggerSet.includes(values)) {
                intersectionSet.add(values);
            }
        });
        return intersectionSet;
    }
    // Método de diferença
    difference(otherSet){
        const differenceSet =  new Set();
        this.values().forEach(value => {
            if(!otherSet.has(value)){
                differenceSet.add(value);
            }
        });
        return differenceSet;
    }
    // Método de Subconjunto
    isSubsetOf(otherSet){
        if(this.size() > otherSet.size()) {
            return false;
        }
        let isSubset = true;
        this.values().every(values => {
            if(!otherSet.has(values)){
                isSubset = false;
                return false;
            }
            return true;
        });
        return isSubset;
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

const setA = new Set();
setA.add('Naruto');
setA.add('Luffy');
const setB = new Set();
setB.add('Naruto');
setB.add('Luffy');
setB.add('Sakura');
const setC = new Set();
setC.add('Luffy');
setC.add('Sakura');
console.log(setA.isSubsetOf(setB));
console.log(setA.isSubsetOf(setC));