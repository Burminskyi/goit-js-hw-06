const inputField = document.querySelector("#validation-input");
const validInputLength = Number(inputField.getAttribute("data-length"));

inputField.addEventListener("blur", (event) => {
  if (inputField.value.length === validInputLength) {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
  }
  if (inputField.value.length === 0) {
    inputField.classList.remove("valid");
    inputField.classList.remove("invalid");
  }
  if (
    inputField.value.length !== validInputLength &&
    inputField.value.length !== 0
  ) {
    inputField.classList.add("invalid");
  }
});
