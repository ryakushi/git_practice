const addBtn = document.getElementById("addTodo");
const input = document.getElementById("input");
const ul = document.getElementById("todoLIst");

addBtn.addEventListener("click", addTodo);

function addTodo() {
  if (input.value == "") {
    window.alert("空白はあかんよ");
    return;
  }
  const li = document.createElement("li");
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  ul.appendChild(li);
  li.textContent = input.value;
  input.value = "";
}
