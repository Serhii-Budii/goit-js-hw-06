const btnDecrementElement = document.querySelector(
  'button[data-action="decrement"]'
);
const btnIncrementElement = document.querySelector(
  'button[data-action="increment"]'
);
const counterValue = document.querySelector("#value");

counterValue.innerHTML = 0;

btnDecrementElement.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
});

btnIncrementElement.addEventListener("click", () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
});
