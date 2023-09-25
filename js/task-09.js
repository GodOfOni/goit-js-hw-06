function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btn = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  colorEl.textContent = color;
});