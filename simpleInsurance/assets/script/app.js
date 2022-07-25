"use strict";

// variables
let basePrice = 2_000_000,
  basicPlanRatio = 1,
  fullPlanRatio = 2;

// event listeners
document.addEventListener("DOMContentLoaded", appInit);

function appInit() {
  generateYears();
}

function getYearShamsi(targetDate = new Date()) {
  if (typeof targetDate.getFullYear() == "number") {
    // convert year to shamsi
    const yearShamsi = new Intl.DateTimeFormat("en-US-u-ca-persian", {
        year: "numeric",
      }).format(targetDate),
      // remove extra string and convert to number
      result = Number(yearShamsi.replace(" AP", ""));

    return result;
  }
}

function generateYears(maxYear = getYearShamsi(), minYear = maxYear - 20) {
  if (maxYear > minYear) {
    const selectYear = document.querySelector("#select-car-year");
    for (let i = maxYear; i >= minYear; i--) {
      let newOption = document.createElement("option");
      newOption.value = i;
      newOption.innerHTML = i;
      selectYear.appendChild(newOption);
    }
  }
}

function NewCar(carModel, ratio) {
  (this.carModel = carModel),
    (this.ratio = ratio),
    (calcPrice = function () {});
}

function newInsurancePlan(planName, planRatio) {
  (this.planName = planName), (this.planRatio = planRatio);
}

let test = {
  basicPlan: { ratio: 2 },
  fullPlan: { ratio: 4 },
};
