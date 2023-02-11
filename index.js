const emailField = document.getElementById("email-field");
const passwdField = document.getElementById("password-field");
const loginBtn = document.getElementById("login-btn");

loginBtn.addEventListener("click", function () {
  const emailFieldValue = emailField.value;
  const passFieldValue = passwdField.value;
  if (emailFieldValue === "" && passFieldValue === "") {
    console.log("valo kore bap er passwd de");
  } else {
    window.location.href = "dashboard.html";
  }
});
