var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === undefined) {
        return false;
    }
    if (typeof classFunction !== 'function' || !classFunction.prototype) {
        throw new Error('Second argument must be a constructor function');
    }
    return isInstanceOf(obj, classFunction.prototype);
};

function isInstanceOf(obj, prototype) {
    if (obj === null) {
        return false;
    }
    if (obj.__proto__ === prototype) {
        return true;
    }
    return isInstanceOf(obj.__proto__, prototype);
}

// Examples
console.log(checkIfInstanceOf(() => {}, Function)); // true
console.log(checkIfInstanceOf(new Date(), Date)); // true
console.log(checkIfInstanceOf(() => {}, Date)); // false
console.log(checkIfInstanceOf(5, Number)); // true

// Example with classes
class Animal {}
class Dog extends Animal {}
console.log(checkIfInstanceOf(new Dog(), Animal)); // true
console.log(checkIfInstanceOf(new Dog(), Date)); // false
