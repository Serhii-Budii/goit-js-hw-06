function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)
    }`;
}

const bodyEl = document.querySelector("body");
const btnSetColor = document.querySelector(".change-color");
const textColor = document.querySelector(".color")

btnSetColor.addEventListener('click', () => {
  const colorNow = getRandomHexColor();

  bodyEl.setAttribute("style", `background-color: ${colorNow}`);
  
  textColor.textContent = `${colorNow}`;
})