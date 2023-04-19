const divEl = document.querySelector("#counter");

const buttonDecEl = document.querySelector('[data-action="decrement"]');
const buttonIncEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

let counterValue = 0;

const onDecrementValue = () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
};

const onIncrementValue = () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
};

buttonDecEl.addEventListener("click", onDecrementValue);

buttonIncEl.addEventListener("click", onIncrementValue);
