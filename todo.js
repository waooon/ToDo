function onButtonClick(){

  var oya = document.createElement("div");
  oya.classList.add("oya");

  var target = document.createElement("div");
  target.classList.add("list");
  target.setAttribute("contenteditable", "true");
  var text = document.forms.input_todo.inputTextBox.value + "\n"

  var doneCheckBox = document.createElement("input");
  doneCheckBox.setAttribute("type", "checkbox");

  var parent_object = document.getElementById("display");

  var inputpart = document.getElementsByName("inputTextBox");

  if(text !== "\n"){
    target.innerHTML += text.replace(/\r?\n/g, '');
    parent_object.appendChild(oya);
    oya.appendChild(target);
    oya.appendChild(doneCheckBox);

    inputpart[0].value = "";
  }
}

function onDeleteButtonClick(){

  var form = document.getElementById("display");
  var form_child = form.children;

  var object = new Object();
  for(var i=0; i<form_child.length; i++){
    // チェックボックス、ラジオボタンはチェックが入ってないものは取得しない
    if(form_child[i].lastElementChild.type == 'checkbox'){
      if(!form_child[i].lastElementChild.checked){
        continue;
      }
      else {
        form.removeChild(form_child[i]);
        continue;
      }
    }
  }
}

function enter(){
  //EnterキーならSubmit
  if(window.event.keyCode==13){
    onButtonClick();
  }
}
