function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const form = document.querySelector("#controls");
const input = document.querySelector("#controls input");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const boxes = document.querySelector("#boxes");

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    let createdDiv = document.createElement("div");

    createdDiv.style.height = 30 + 10 * i + "px";
    createdDiv.style.width = 30 + 10 * i + "px";
    createdDiv.style.backgroundColor = getRandomHexColor();

    boxes.append(createdDiv);
  }
}

createBtn.addEventListener("click", function () {
  const amount = input.value;

  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  } else alert("введите число от 0 до 100");
});

destroyBtn.addEventListener("click", function () {
  boxes.innerHTML = "";
  input.value = "";
});
