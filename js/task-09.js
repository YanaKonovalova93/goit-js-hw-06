function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector("body");

const divEl = document.querySelector(".widget");

const spanEl = document.querySelector(".color");

const buttonEl = document.querySelector(".change-color");

buttonEl.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  const randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = `${randomColor}`;
}
