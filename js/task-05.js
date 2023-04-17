const inputEl = document.querySelector("#name-input");
const spanEl = document.querySelector("#name-output");

inputEl.addEventListener("input", onTextInput);

function onTextInput(event) {
  spanEl.textContent =
    inputEl.value === "" ? "Anonymous" : event.currentTarget.value;
}
