const todoText = document.getElementById("todoText"),
  add = document.getElementById("addimg"),
  listItems = document.getElementById("list-Item"),
  clearAllBtn = document.getElementById("clearAllBtn");
let todoData = JSON.parse(localStorage.getItem("todoData"));
if (!todoData) {
  todoData = [];
}
add.addEventListener("click", () => {
  if (todoText.value === "") {
    alert("Please enter the text !");
    todoText.focus();
  }
  let li = document.createElement("li");
  const todoItem = `<div ondblclick = "CompleteTodoItem(this)">
        ${todoText.value}
        </div>
        <div class ="list1">
            <i onClick="Update(this)" class="fas fa-edit"></i>
            <i onClick="Delete(this)" class="fas fa-trash-alt"></i>
        </div>
        `;

  li.innerHTML = todoItem;
  listItems.appendChild(li);

  let dataItem = {
    item: todoText.value,
  };
  console.log(dataItem);
  todoData.push(dataItem);
  localStorage.setItem("todoData", JSON.stringify(todoData));

  todoText.value = "";
  updateClearAllButtonVisibility();
});

function updateClearAllButtonVisibility() {
  clearAllBtn.style.display = todoData.length > 1 ? "block" : "none";
  console.log("todolength", todoData);
}

clearAllBtn.addEventListener("click", () => {
  listItems.innerHTML = "";
  todoData = [];
  localStorage.removeItem("todoData");
  updateClearAllButtonVisibility();
});

function CompleteTodoItem(e) {
  if (e.parentElement.querySelector("div").style.textDecoration === "") {
    e.parentElement.querySelector("div").style.textDecoration = "line-through";
  }
}

function Update(e) {
  console.log("text", e.parentElement.previousElementSibling.innerHTML);
  todoText.value = e.parentElement.previousElementSibling.innerHTML.trim();
  e.parentElement.parentElement.remove();
  updateClearAllButtonVisibility();
}
function Delete(e) {
  let deleteValue =
    e.parentElement.parentElement.querySelector("div").innerText;
  console.log(deleteValue);
  // if(deleteValue === todoData){
  //   todoData.
  // }
  if (confirm(`Are you sure?. Do you want to delete this ${deleteValue}!`)) {
    console.log("clicked");
    e.parentElement.parentElement.remove();
  }

  updateClearAllButtonVisibility();
}
