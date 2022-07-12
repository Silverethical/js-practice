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
nameField.addEventListener("blur", validateField);
emailField.addEventListener("blur", validateField);
subjectField.addEventListener("blur", validateField);
messageField.addEventListener("blur", validateField);
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
  const emailValue = emailField.value;
  if (emailValue.includes("@")) {
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

  //wait 3 seconds
  delay(function () {
    //reset
    resetContactForm();
    // window.location.reload();
  }, 3000);
}

function resetContactForm() {
  contactForm.reset();
  hideLoading();
}

function showLoading() {
  contactForm.classList.add("hidden");
  loadingDiv.classList.remove("hidden");
}

function hideLoading() {
  loadingDiv.classList.add("hidden");
  contactForm.classList.remove("hidden");
}

let delay = (function () {
  let timer = 0;
  return function (callback, ms) {
    clearTimeout(timer);
    timer = setTimeout(callback, ms);
  };
})();
