const emailField = document.getElementById("email-field");
const passwdField = document.getElementById("password-field");
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function () {
  const emailFieldValue = emailField.value;
  const passFieldValue = passwdField.value;
  if (emailFieldValue == "" && passFieldValue == "") {
    alert("valo kore bap er email soho password de");
  } else if (emailFieldValue == "") {
    alert("valo kore bap er email de");
    passwdField.value = "";
  } else if (passFieldValue == "") {
    alert("valo kore bap er password de");
    emailField.value = "";
  } else {
    location.href = "dashboard.html";
  }
});
