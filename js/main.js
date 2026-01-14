function addItem() {
    const input = document.getElementById("itemInput");
    if (!input.value.trim())
        return;
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = input.value;

    document.getElementById("itemList").appendChild(li);
    li.appendChild(checkbox);
    li.appendChild(span);

    checkbox.onchange = () => {
        li.classList.toggle("Done", checkbox.checked);
    }

    const deletBtn = document.createElement("button");
    deletBtn.textContent = "x";
    deletBtn.onclick = () => {
        li.remove();
    };
    li.appendChild(deletBtn);

    input.value = "";
}