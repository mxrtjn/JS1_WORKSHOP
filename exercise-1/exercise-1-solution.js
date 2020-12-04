//1. Change background color (#3f5ba8) by id.
function onClickTextEjercise1() {
  document.querySelector("#text-exercise-1").style.backgroundColor = "#3f5ba8";
}

//2. Change background color (#80b047) by class.
function onClickTextEjercise2() {
  document.querySelector(".class-text-2").style.backgroundColor = "#80b047";
}

//3. Change background color (#808494) by attribute.
function onClickTextEjercise3() {
  document.querySelector("[name='text']").style.backgroundColor = "#808494";
}

//4. Change background color (#de5658) by attribute and class.
function onClickTextEjercise4() {
  document.querySelector(".class-text-4[name='text']").style.backgroundColor =
    "#de5658";
}

//5. Change my text.
function onClickTextEjercise5() {
  document.querySelector("#text-exercise-5").innerHTML =
    "5. This text was changed!!";
}

//6. Add click event (alert("hello world")).
function onClickTextEjercise6() {
  document
    .querySelector("#btn-alert")
    .addEventListener("click", () => alert("Hello world"));
}
