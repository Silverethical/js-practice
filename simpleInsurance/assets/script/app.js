"use strict";

document.addEventListener("DOMContentLoaded", appInit);

function appInit() {
  const selectYear = document.querySelector("#select-car-year"),
    newDate = new Date(),
    // convert year to shamsi
    yearShamsi = Number(
      new Intl.DateTimeFormat("en-US-u-ca-persian", {
        year: "numeric",
      })
        .format(newDate)
        .replace(" AP", "")
    ),
    max = yearShamsi,
    min = max - 20;

  for (let i = max; i >= min; i--) {
    let newOption = document.createElement("option");
    newOption.value = i;
    newOption.innerHTML = i;
    selectYear.appendChild(newOption);
  }
}
