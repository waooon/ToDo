// グローバル変数
/* リストの配列 */
var listArr = [];
/* ストレージのキー */
storageKey = "listObj";

function addList(bdy){
  var oya = document.createElement("div");
  oya.classList.add("oya");

  // リスト内容
  var target = document.createElement("div");
  target.classList.add("list");
  target.setAttribute("id", "inputform");
  target.setAttribute("contenteditable", "true");
  target.setAttribute("wrap", "off");
  // var text = document.forms.input_todo.inputTextBox.value + "\n"
  var text = bdy;


  // 完了チェックボックス
  var doneCheckBox = document.createElement("input");
  doneCheckBox.setAttribute("id", "checkBox");
  doneCheckBox.setAttribute("type", "checkbox");
  doneCheckBox.setAttribute("onchange", "isChecked();");

  // 編集ボタン
  var editButton = document.createElement("button");
  editButton.setAttribute("type", "submit");
  editButton.setAttribute("class", "editbutton");
  // editButton.setAttribute("value", "&#xf044;");
  var editButtonIcon = document.createElement("i")
  editButtonIcon.setAttribute("class", "fas fa-edit fa-3x")
  editButton.appendChild(editButtonIcon);

  var parent_object = document.getElementById("display");

  var inputpart = document.getElementsByName("inputTextBox");

  if(text !== "\n"){
    // target.innerHTML += text.replace(/\r?\n/g, '');
    target.innerHTML += text;
    parent_object.appendChild(oya);
    oya.appendChild(target);
    oya.appendChild(doneCheckBox);
    oya.appendChild(editButton);

    inputpart[0].value = "";
    saveList(text);
  }
}

function onButtonClick(){
  var text = document.forms.input_todo.inputTextBox.value + "\n";
  addList(text);
}

function onDeleteButtonClick(){

  var form = document.getElementById("display");
  var form_child = form.children;

  for(var i=0; i<form_child.length; i++){
    // チェックボックス、ラジオボタンはチェックが入ってないものは取得しない
    if(!form_child[i].children[1].checked){
      continue;
    }
    else {
      form.removeChild(form_child[i]);
      // listArrからチェックの付いている要素を削除
      listArr.splice(i, 1);
      saveStorege(storageKey, listArr);
      // チェックが付いているものは削除されるので、iを1つ戻す
      i--;
      continue;
    }
  }
}

// 編集ボタンクリック時 ※保留
function onEditButtonClick(){
}

function enter(){
  //EnterキーならSubmit
  if(window.event.keyCode==13){
    onButtonClick();
  }
}

function isChecked(){
  var chkBox = document.activeElement;
  var inputform = chkBox.parentElement.children.inputform;
  if(chkBox.checked && inputform){
    inputform.style.textDecoration = "line-through";
  }
  else {
    inputform.style.textDecoration = "none";
  }
}

// ローカルストレージにデータを保存する
function saveStorege(key, val){
  localStorage.setItem(key,JSON.stringify(val));
}

// ローカルストレージからデータを取得する
function getStorage(key){
  var obj = localStorage.getItem(key);
  return JSON.parse(obj);
}

// TODOリストを保存する
function saveList(bdy){
  var listObj = {
    bdy: bdy
  }
  listArr.push(listObj);
  saveStorege(storageKey, listArr);
}

// TODOリストを追加する
function addTodoList(bdy){
  for(i = 0; i < bdy.length; i++){
    addList(bdy[i]);
  }
}

// TODOリストを読み込む
function readList(){
  var listObjs = getStorage(storageKey);
  if(listObjs == null) return;
  for(var i = 0; i < listObjs.length; i++){
    var listObj = listObjs[i];
    var bdy = listObj.bdy;
    // addListメソッドを呼ぶ
    addList(bdy);
  }
}
