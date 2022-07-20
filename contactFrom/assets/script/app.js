"use strict";

// variables
const contactForm = document.querySelector("#contact-form"),
  nameField = document.querySelector("#name"),
  emailField = document.querySelector("#email"),
  subjectField = document.querySelector("#subject"),
  messageField = document.querySelector("#message"),
  buttonsDiv = document.querySelector("#buttons-div"),
  submitBtn = document.querySelector("#submit-btn"),
  resetBtn = document.querySelector("#reset-btn"),
  loadingDiv = document.querySelector("#loading-div");

// eventListeners
document.addEventListener("DOMContentLoaded", appInit);
nameField.addEventListener("keyup", validateField);
emailField.addEventListener("keyup", validateField);
subjectField.addEventListener("keyup", validateField);
messageField.addEventListener("keyup", validateField);
contactForm.addEventListener("submit", submitAction);
resetBtn.addEventListener("click", resetContactForm);

// functions
function appInit() {
  submitBtn.disabled = true;
}

// validate fields
function validateField() {
  isNotEmpty(this);

  if (this.type === "email") {
    validateEmail(this);
  }

  activeBtn();
}

// check fields are not empty
function isNotEmpty(field) {
  if (!!field.value) {
    field.style = "box-shadow: 0px 0px 10px 0px #04953967 !important";
    field.classList.add("success");
  } else {
    field.style = "box-shadow: 0px 0px 10px 0px #ff0d0067";
    field.classList.remove("success");
  }
}

// check email contains @
function validateEmail(field) {
  const emailAddress = emailField.value,
    regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAddress.match(regexEmail)) {
    field.style = "box-shadow: 0px 0px 10px 0px #04953967 !important";
    field.classList.add("success");
  } else {
    field.style = "box-shadow: 0px 0px 10px 0px #ff0d0067";
    field.classList.remove("success");
  }
}

function activeBtn() {
  let successCount = document.querySelectorAll(".success");
  if (successCount.length == 4) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function submitAction(e) {
  e.preventDefault();

  //show loading
  showLoading();

  //wait 3 seconds then reset the form
  setTimeout(resetContactForm, 3000);
}

function resetContactForm() {
  hideLoading();
  contactForm.reset();
  appInit();
}

function showLoading() {
  contactForm.classList.add("hidden");
  loadingDiv.classList.remove("hidden");
}

function hideLoading() {
  loadingDiv.classList.add("hidden");
  contactForm.classList.remove("hidden");
}
