"use strict";

// variables
const submitBtn = document.querySelector("#submit-btn"),
  name = document.querySelector("#name"),
  email = document.querySelector("#email"),
  subject = document.querySelector("#subject"),
  message = document.querySelector("#message");

// eventListeners
document.addEventListener("DOMContentLoaded", appInit);
name.addEventListener("blur", validateField);
email.addEventListener("blur", validateField);
subject.addEventListener("blur", validateField);
message.addEventListener("blur", validateField);

// functions
function appInit() {
  submitBtn.disabled = true;
}

function validateField() {
  isNotEmpty(this);
}

function isNotEmpty(field) {
  if (!field.value) {
    field.style = "box-shadow: 0px 0px 10px 0px #ff0d0067";
  } else {
    field.style = "box-shadow: 0px 0px 10px 0px #04953967 !important";
  }
}
