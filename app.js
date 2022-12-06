const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
// const loginInput = document.querySelector("#login-form input");
const loginButton = loginForm.querySelector("button");

function onLoginButtonClick() {
    console.dir(loginInput);
    //console.log(loginInput.value);
    
    //Form Submit으로 아래 자동으로 html선에서 가능
    // const userName = loginInput.value;
    // if (userName==="") {
    //     alert("Please write your name");
    // } else if (userName.length > 15) {
    //     alert("Your name is too long")
    // }

}

loginButton.addEventListener("click", onLoginButtonClick)