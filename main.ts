function ShoppingList() {
    this.groceries = [];
}

ShoppingList.prototype.addItem = function (item) {
    this.groceries = this.groceries.concat([item]);
}

ShoppingList.prototype.removeItem = function (item) {
    this.groceries = this.groceries.filter( grocery => {
        return item !== grocery;
    });
}

var myList = new ShoppingList();
myList.addItem("Orange");
myList.addItem("Apple");
console.log(myList.groceries);
myList.removeItem("Orange");

console.log(myList.groceries);


// Converting the above code to ES6 class using typescript

class ShoppingCart {
    groceries: string[];

    constructor() {
        this.groceries = [];
    }

    addItem (item: string) {
        this.groceries = [...this.groceries, item];
    }

    removeItem (item: string) {
        this.groceries = this.groceries.filter(grocery => item !== grocery);
    }
}

const myCart = new ShoppingCart();
myCart.addItem("Apple");
myCart.addItem("Banana");

console.log(myCart.groceries);

myCart.removeItem("Apple");

console.log(myCart.groceries);