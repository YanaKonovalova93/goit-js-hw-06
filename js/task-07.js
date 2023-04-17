const inputEl = document.querySelector("#font-size-control");

const spanEl = document.querySelector("#text");

inputEl.addEventListener("input", onChangeSize);

const inputSliderMin = inputEl.getAttribute("min");
const inputSliderMax = inputEl.getAttribute("max");

spanEl.style.fontSize = inputEl.value + "px";

function onChangeSize(event) {
  const changeFontSize = event.currentTarget.value;
  spanEl.style.fontSize = changeFontSize + "px";
}
