// DOM references
let itemInput = document.getElementById("itemInput");
let addItemForm = document.getElementById("addItemForm");
let clearButton = document.getElementById("clearButton");
let shoppingList = document.getElementById("shoppingList");

// Add item to shopping list
addItemForm.addEventListener("submit", (event) => {
    // Prevent page reload
    event.preventDefault();

    // Prevent empty input
    if (itemInput.value.trim() === "") return;

    // Generate unique id for checkbox/label linkage
    let id = "item-" + Date.now();

    // Create list item container
    let li = document.createElement("li");
    li.className = "shoppingItem";

    // Create checkbox (state)
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;

    // Create label (display)
    let label = document.createElement("label");
    label.textContent = itemInput.value;
    label.htmlFor = checkbox.id;

    // Compose structure
    li.appendChild(checkbox);
    li.appendChild(label);
    shoppingList.appendChild(li);

    // Reset input field
    itemInput.value = "";
})

// Clear all items from list
clearButton.addEventListener("click", () => {
    shoppingList.innerHTML = "";
})