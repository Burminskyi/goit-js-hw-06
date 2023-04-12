function getRandomHexColor(event) {
  const randomColor = `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  return (
    (body.style.backgroundColor = randomColor) &&
    (colorName.textContent = randomColor)
  );
}

const body = document.querySelector("body");
const changeColorWidget = document.querySelector(".widget");
const changeColorBtn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");

changeColorBtn.addEventListener("click", getRandomHexColor);

console.log(getRandomHexColor());
