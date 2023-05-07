class Product {
    constructor({id, inventoryCount, name}) {
        this.id = id;
        this.inventoryCount = inventoryCount;
        this.inventoryCount = 0;
        this.name = name;
    }
    inventoryCount() {
        this.count ++; 
    }
}
const lotion = new Product({id:6, inventoryCount:3, name:'lotion'});
lotion.inventoryCount = 4
console.log(lotion.id);
console.log(lotion.inventoryCount);

let currentNode = null;
console.log(currentNode.val.id);