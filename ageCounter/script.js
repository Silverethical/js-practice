"use strict";

// selectors
let htmlBirthDay = document.querySelector("#birth-day"),
  htmlBirthMonth = document.querySelector("#birth-month"),
  htmlBirthYear = document.querySelector("#birth-year"),
  htmlSubmitBtn = document.querySelector("#submit-btn"),
  htmlResultSection = document.querySelector("#result-section");

// event listeners
htmlSubmitBtn.addEventListener("click", calcAge);

function createResult(pText) {
  if (!!htmlResultSection.querySelector(".result")) {
    htmlResultSection.querySelector(".result").remove();
  }

  const newDiv = document.createElement("div");
  newDiv.classList.add("result");
  let newP = document.createElement("p");
  newP.appendChild(document.createTextNode(pText));
  let newH3 = document.createElement("h3");
  newH3.textContent = "سن شما:";
  newDiv.appendChild(newH3);
  newDiv.appendChild(newP);

  htmlResultSection.appendChild(newDiv);
}

function calcAge() {
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
    
    console.log(finalUserAge);
    createResult(finalResult);
  }
}
