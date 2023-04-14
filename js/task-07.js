const inputController = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

text.style.fontSize = inputController.value + "px";

inputController.addEventListener("input", (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
});
