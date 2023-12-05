const addBtn = document.getElementById("addTodo");
const input = document.getElementById("input");
const ul = document.getElementById("todoLIst");
const doneBtn = document.getElementById("doneTodo");

addBtn.addEventListener("click", addTodo);
doneBtn.addEventListener("click", doneTodo);

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

function doneTodo() {
  const liLength = document.getElementsByTagName("li");
  if (liLength.length <= 0) {
    window.alert("削除するもんないよ");
  }
  console.log();
  liLength[liLength.length - 1].remove();
}
