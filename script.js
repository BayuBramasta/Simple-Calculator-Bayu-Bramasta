let textArea = document.getElementById("prompt");
let valueEntry;
let getValueA;
let ValueA;
let getValueB;
let ValueB;
let operator;
let result;

function btnC() {
  textArea.value = "";
}
// number button
function btn1() {
  textArea.value += "1";
  console.log("1");
}
function btn2() {
  textArea.value += "2";
}
function btn3() {
  textArea.value += "3";
}
function btn4() {
  textArea.value += "4";
}
function btn5() {
  textArea.value += "5";
}
function btn6() {
  textArea.value += "6";
}
function btn7() {
  textArea.value += "7";
}
function btn8() {
  textArea.value += "8";
}
function btn9() {
  textArea.value += "9";
}
function btn0() {
  textArea.value += "0";
}
function coma() {
  textArea.value += ".";
}
// button operator
function pangkat() {
  getValueA = textArea.value;
  ValueA = parseFloat(getValueA);
  textArea.value = ValueA * ValueA;
}
function negative() {
  getValueA = textArea.value;
  ValueA = parseFloat(getValueA);
  textArea.value = ValueA * -1;
}
function persen() {
  getValueA = textArea.value;
  ValueA = parseFloat(getValueA);
  textArea.value = parseFloat(ValueA / 100);
}
function plus() {
  getValueA = textArea.value;
  ValueA = parseFloat(getValueA);
  textArea.value = "";
  operator = "+";
}
function minus() {
  getValueA = textArea.value;
  ValueA = parseFloat(getValueA);
  textArea.value = "";
  operator = "-";
}
function div() {
  getValueA = textArea.value;
  ValueA = parseFloat(getValueA);
  textArea.value = "";
  operator = "/";
}
function mul() {
  getValueA = textArea.value;
  ValueA = parseFloat(getValueA);
  textArea.value = "";
  operator = "*";
}
function Result() {
  getValueB = textArea.value;
  ValueB = parseFloat(getValueB);
  switch (operator) {
    case "+":
      result = ValueA + ValueB;
      console.log(result);
      textArea.value = result;
      break;

    case "-":
      result = ValueA - ValueB;
      console.log(result);
      textArea.value = result;
      break;

    case "*":
      result = ValueA * ValueB;
      console.log(result);
      textArea.value = result;
      break;

    case "/":
      result = ValueA / ValueB;
      console.log(result);
      textArea.value = result;
      break;
  }
}
