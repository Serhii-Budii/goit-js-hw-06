const loginFormElement = document.querySelector(".login-form");
console.log(loginFormElement.querySelector("input[name = email]"));

loginFormElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const inputEmailElement = loginFormElement.querySelector("input[name = email]");
  const inputPassElement = loginFormElement.querySelector("input[name = password]");
  const inputPassElementLength = inputPassElement.value.trim().length;
  const inputEmailElementLength = inputEmailElement.value.trim().length;

  if (inputPassElementLength === 0 || inputEmailElementLength === 0) {
    return alert("Всі поля мають бути заповненими!");
  } else {
    const elements = {
      email: inputEmailElement.value,
      password: inputPassElement.value,
    };
    loginFormElement.reset();
    console.log(elements);
  }
});
