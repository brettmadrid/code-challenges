class Stack {
    constructor(attributes) {
        this.myArray = attributes.myArray;
    }

    add(item) {
        this.myArray.push(item);
    }
    remove() {
        this.myArray.pop();
    }

    numOfItems() {
        if (this.myArray.length > 0) {
            return this.myArray.length;
        } else {
            return `There are no items in your stack.`
        }
    }

    storage() {
        return this.myArray;
    }
}

const myStack = new Stack({
    myArray: []
});
console.log(myStack.numOfItems());
myStack.add('First');
myStack.add('Second');
myStack.add('Third');
console.log(myStack.storage());
myStack.remove();
console.log(myStack.storage());
myStack.remove();
console.log(myStack.storage());
myStack.remove();
console.log(myStack.storage());
console.log(myStack.numOfItems());
