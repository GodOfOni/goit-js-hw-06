const textInput = document.querySelector(`#name-input`);
const output = document.querySelector(`#name-output`);
const DEFAULT_VALUE = "Anonymous";

textInput.addEventListener("input", (event) => {
  output.textContent =
    event.currentTarget.value === "" ? DEFAULT_VALUE : event.target.value;
});
