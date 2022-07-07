"use strict";

// selectors
let htmlBirthDay = document.querySelector("#birth-day"),
  htmlBirthMonth = document.querySelector("#birth-month"),
  htmlBirthYear = document.querySelector("#birth-year"),
  htmlSubmitBtn = document.querySelector("#submit-btn"),
  htmlResultSection = document.querySelector("#result-section"),
  htmlResultDiv = htmlResultSection.querySelector("#result-section > div");

// event listeners
htmlSubmitBtn.addEventListener("click", calcAge);

function printResult(pText) {
  if (!htmlResultDiv.classList.contains("result")) {
    htmlResultDiv.classList.add("result");
  }
  let resultP = htmlResultDiv.querySelector("p"),
    resultH3 = htmlResultDiv.querySelector("h3");

  resultP.textContent = pText;
  resultH3.textContent = "سن شما:";
}

function calcAge(e) {
  e.preventDefault();

  if (!htmlBirthYear.value || !htmlBirthMonth.value || !htmlBirthDay.value) {
    alert("لطفا همه باکس ها را پر کنید");
  } else {
    let todayDate = new Date(),
      userBirthdate = new Date(
        htmlBirthYear.value +
          "-" +
          htmlBirthMonth.value +
          "-" +
          htmlBirthDay.value
      ),
      userAge = new Date(todayDate - userBirthdate);

    let baseDate = new Date(0);

    let finalUserAge = {
      years: userAge.getFullYear() - baseDate.getFullYear(),
      months: userAge.getMonth(),
      days: userAge.getDate() - baseDate.getDate(),
      hours: userAge.getHours(),
      minutes: userAge.getMinutes(),
      seconds: userAge.getSeconds(),
    };

    let finalResult = `${finalUserAge.years} سال
    ${finalUserAge.months} ماه
    ${finalUserAge.days} روز
    ${finalUserAge.hours} ساعت
    ${finalUserAge.minutes} دقیقه
    و ${finalUserAge.seconds} ثانیه`;

    // console.log(finalUserAge);
    printResult(finalResult);
  }
}
