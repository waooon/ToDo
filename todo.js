function onButtonClick(){
  var target = document.getElementById("display");
  target.innerHTML += document.forms.input_todo.inputTextBox.value + "\n";
  // target.innerText = "bbb";
}
