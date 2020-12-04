//1. Change the background-color to all the <span> element (#3f5ba8).
function onClickTextEjercise1() {
  document.querySelectorAll("#content-exercise-1 span").forEach((element) => {
    element.style.backgroundColor = "#3f5ba8";
    element.style.color = "white";
  });
}

//2. Add border to all the &lt;span&gt; element.
function onClickTextEjercise2() {
  document.querySelectorAll("#content-exercise-2 span").forEach((element) => {
    element.style.border = "1px solid #3f5ba8";
  });
}

//3. Change background color (#808494) by attribute.
function onClickTextEjercise3() {
  document.querySelectorAll("#content-exercise-3 span").forEach((element) => {
    const textbox = document.createElement("input");
    element.appendChild(textbox);
  });
}
