function onButtonClick(){

  var oya = document.createElement("div");
  oya.classList.add("oya");

  var target = document.createElement("div");
  target.classList.add("list");
  target.setAttribute("contenteditable", "true");
  var text = document.forms.input_todo.inputTextBox.value + "\n"

  var deleteButton = document.createElement("input");
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "削除");

  var doneCheckBox = document.createElement("input");
  doneCheckBox.setAttribute("type", "checkbox");

  var parent_object = document.getElementById("display");

  if(text !== "\n"){
  target.innerHTML += text.replace(/\r?\n/g, '');
  parent_object.appendChild(oya);
  oya.appendChild(target);
  oya.appendChild(deleteButton);
  oya.appendChild(doneCheckBox);
  }
}
