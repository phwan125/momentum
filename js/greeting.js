const loginInput = document.querySelector(".form_login input");
const loginForm = document.querySelector(".form_login");
const linkNaver = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "userName";

function paintUserName(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello ${username}`;
}

function btnClick(event) {
  const userName = loginInput.value;
  event.preventDefault();
  console.log(userName);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // greeting.innerText = "hello " + userName;
  paintUserName(userName);
  localStorage.setItem(USERNAME_KEY, userName);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", btnClick);
} else {
  paintUserName(savedUserName);
}
