function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  displayHEX.textContent = getRandomHexColor();
  document.body.style.backgroundColor = getRandomHexColor();
});
