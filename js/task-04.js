const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const value = document.querySelector("#value");

let counterValue = 0;

const onIncrementBtnClick = () => {
  counterValue += 1;
  value.textContent = counterValue;
};

const onDecrementBtnClick = () => {
  counterValue -= 1;
  value.textContent = counterValue;
};

decrementBtn.addEventListener("click", onDecrementBtnClick);
incrementBtn.addEventListener("click", onIncrementBtnClick);
