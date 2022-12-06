const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
// const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");

function onLoginButtonClick() {
    console.dir(loginInput);
    console.log(loginInput.value);
}

loginButton.addEventListener("click", onLoginButtonClick)