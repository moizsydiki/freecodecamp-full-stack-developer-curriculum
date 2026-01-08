const inventory = [];

// function findProductIndex() {}

function addProduct(product) {
  inventory.push(product);
  console.log(`${{ product }} added to the inventory`);
}

console.log(addProduct({ name: "Flour", quantity: 5 }));

console.log(inventory);
