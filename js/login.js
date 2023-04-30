const loginForm = document.querySelector("#login-form")
const loginInput = document.querySelector("#login-form input")
const clockDiv = document.querySelector(".clock");
const greeting = document.querySelector("#greeting")
const loginUser = document.querySelector("#login-user")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreeting(savedUsername)
}


function paintGreeting(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  clockDiv.classList.remove("clock-padding");
  loginUser.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const usernameWrote = loginInput.value;
    localStorage.setItem(USERNAME_KEY, usernameWrote);
    paintGreeting(usernameWrote)
  }
  
