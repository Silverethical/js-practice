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
  loadingDiv = document.querySelector("#loading-div"),
  doneDiv = document.querySelector("#done-div");

// eventListeners
document.addEventListener("DOMContentLoaded", appInit);
nameField.addEventListener("keyup", validateField);
emailField.addEventListener("keyup", validateField);
subjectField.addEventListener("keyup", validateField);
messageField.addEventListener("keyup", validateField);
contactForm.addEventListener("submit", submitAction);
contactForm.addEventListener("reset", resetContactForm);

// functions
function appInit() {
  submitBtn.disabled = true;

  for (let i = 0; i < contactForm.children.length; i++) {
    contactForm.children[i].classList.remove("success");
  }
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
    validateSuccess(field);
  } else {
    validateFailed(field);
  }
}

// check email contains @
function validateEmail(field) {
  const emailAddress = emailField.value,
    regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAddress.match(regexEmail)) {
    validateSuccess(field);
  } else {
    validateFailed(field);
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

  //hide form
  hideContactForm();

  //show loading
  showLoading();

  //after 2 seconds hide loading and show done
  setTimeout(function () {
    hideLoading();
    showDone();
  }, 2000);

  //after 4 seconds reset the form
  setTimeout(resetContactForm, 5000);
}

function resetContactForm() {
  showContactForm();
  hideLoading();
  hideDone();
  contactForm.reset();
  appInit();
}

function validateSuccess(field) {
  field.classList.remove("failed");
  field.classList.add("success");
}

function validateFailed(field) {
  field.classList.remove("success");
  field.classList.add("failed");
}

function showContactForm() {
  contactForm.classList.remove("hidden");
}

function hideContactForm() {
  contactForm.classList.add("hidden");
}

function showLoading() {
  loadingDiv.classList.remove("hidden");
}

function hideLoading() {
  loadingDiv.classList.add("hidden");
}

function showDone() {
  doneDiv.classList.remove("hidden");
}

function hideDone() {
  doneDiv.classList.add("hidden");
}
