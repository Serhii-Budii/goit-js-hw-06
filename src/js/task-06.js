const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", () => {
  validationInput.classList.toggle(
    "valid",
    validationInput.value.length ===
      Number(validationInput.getAttribute("data-length"))
  );
  validationInput.classList.toggle(
    "invalid",
    validationInput.value.length !==
      Number(validationInput.getAttribute("data-length"))
  );
});
