const username = document.getElementById("username");
const password = document.getElementById("password");
const msgUsername = document.getElementById("msgUsername");
const msgPassWord = document.getElementById("msgPassWord");
const SignUp = document.getElementById("SignUp");

let isValidUser = false;
let isValidPass = false;

let Digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let SpecialChar = ["@", "#", "&", "*", "_", "-"];

function checkForValidity() {
  if (isValidUser && isValidPass) {
    SignUp.disabled = false;
  }
  isValidUser = false;
  isValidPass = false;
}

function handleValidationForUsername() {
  let usernameValue = username.value;

  if (usernameValue.trim() === "") {
    console.log("inside trim function");
    msgUsername.innerText = "enter some value";
  } else {
    msgUsername.innerText = "";

    for (let i = 0; i < 10; i++) {
      if (usernameValue.includes(Digits[i])) {
        isValidUser = true;
        break;
      }
    }
    if (!isValidUser) {
      msgUsername.innerText = "Enter at least one digit";
    }
  }
}

function handleValidationForPassWord() {
  let pValue = password.value;
  if (pValue.trim() === "") {
    msgPassWord = "Enter some value";
  } else {
    msgPassWord.innerText = "";

    for (let i = 0; i < 6; i++) {
      if (pValue.includes(SpecialChar[i])) {
        isValidPass = true;
        break;
      }
    }
    if (!isValidPass) {
      msgPassWord.innerText = "Enter at least one special character";
    }
  }
  checkForValidity();
}

username.addEventListener("change", () => {
  handleValidationForUsername();
});

password.addEventListener("change", () => {
  handleValidationForPassWord();
});
