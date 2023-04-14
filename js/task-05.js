const inputField = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputField.addEventListener("input", (event) => {
  if (event.currentTarget.value.trim() === "") {
    outputName.textContent = "Anonymous";
  } else outputName.textContent = event.currentTarget.value.trim();
});
