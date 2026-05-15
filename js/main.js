// TODO: input -> register -> generate shopping item with checkboxの実装
let itemInput = document.getElementById("itemInput");
// protect empty input
if (itemInput.value === "") return;
let addButton = document.getElementById("addButton");
let shoppingList = document.getElementById("shoppingList");

addButton.addEventListener("click", () => {
    // shoppingList変数をベースにli, input-checkbox, labelを使いitemInputをTODOリストとして登録する。

    // idを事前に用意
    let id = "item-" + Date.now();

    // li要素を作成
    let li = document.createElement("li");
    li.className = "shoppingItem";

    // checkbox作成
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = id;

    // label作成
    let label = document.createElement("label");
    label.textContent = itemInput.value;
    label.htmlFor = checkbox.id;

    // つなぐ
    li.appendChild(checkbox);
    li.appendChild(label);
    shoppingList.appendChild(li);
})