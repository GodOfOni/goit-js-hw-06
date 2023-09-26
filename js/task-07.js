const slider = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

slider.value = 56;
span.style.fontSize = slider.value + "px";

slider.addEventListener("input", () => {
  span.style.fontSize = `${slider.value}px`;
});
