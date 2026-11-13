
let shoppingList = ["Bread", "Milk", "Sugar", "Rice"];

// 1. Display the entire shopping list
console.log(shoppingList);

// 2. Display the first item
console.log("First item: " + shoppingList[0]);

// 3. Display the last item
console.log("Last item: " + shoppingList[shoppingList.length - 1]);

// 4. Add Cooking Oil
shoppingList.push("Cooking Oil");

// 5. Remove the first item
shoppingList.shift();

// 6. Change Sugar to Tea Leaves
shoppingList[1] = "Tea Leaves";

// 7. Display total number of items
console.log("Total items: " + shoppingList.length);

// Display updated shopping list
console.log("Updated shopping list:", shoppingList);
