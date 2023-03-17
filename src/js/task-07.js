const fontSizeControlElement = document.querySelector("#font-size-control");
const textElement = document.querySelector("#text");

textElement.setAttribute("style", `font-size: ${fontSizeControlElement.value}px`);

fontSizeControlElement.addEventListener("input", () =>
  textElement.setAttribute("style", `font-size: ${fontSizeControlElement.value}px`)
);
