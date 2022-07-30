"use strict";

// insurance base price
const basePrice = 2_000_000;

// event listeners
document.addEventListener("DOMContentLoaded", appInit);
const htmlSubmitBtn = document.querySelector("#submit-btn");
htmlSubmitBtn.addEventListener("click", function () {
  userInputs.initiate();
  hideResult();
  showLoading();
  // wait 3 seconds and then proceed
  setTimeout(() => {
    hideLoading();
    showResult(userInputs.carModel, userInputs.carYear, userInputs.finalPrice);
  }, 3000);
});

// functions
function appInit() {
  generateYears();
  hideResult();
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
    const htmlYearDropdown = document.querySelector("#select-car-year");
    for (let i = maxYear; i >= minYear; i--) {
      let newOption = document.createElement("option");
      newOption.value = i;
      newOption.innerHTML = i;
      htmlYearDropdown.appendChild(newOption);
    }
  }
}

let priceRatios = {
  insurancePlans: {
    basic: 1.4,
    full: 2,
  },
  cars: {
    NewCar: function (carMaker, carName, priceRatio) {
      if (!this[carMaker]) {
        this[carMaker] = {};
      }
      this[carMaker][carName] = priceRatio;
    },
  },
};

function calcPrice(carRatio, yearDifference, insuranceRatio) {
  if (!!carRatio && yearDifference >= 0 && !!insuranceRatio) {
    let price;
    price = basePrice * carRatio;
    price = (price * (100 - yearDifference)) / 100;
    price = price * insuranceRatio;
    return price;
  }
}

function showLoading() {
  const htmlLoading = document.querySelector("#loading-div");
  htmlLoading.classList.remove("hidden");
}
function hideLoading() {
  const htmlLoading = document.querySelector("#loading-div");
  htmlLoading.classList.add("hidden");
}

function showResult(carModel, carYear, finalPrice) {
  const htmlResult = document.querySelector("#result-div");
  htmlResult.classList.remove("hidden");
  htmlResult.innerHTML = `
  <h2>خلاصه فاکتور</h2>
  <p>مدل ماشین: ${carModel}</p>
  <p>سال ساخت: ${carYear}</p>
  <p>قیمت نهایی: ${finalPrice}</p>`;
}
function hideResult() {
  const htmlResult = document.querySelector("#result-div");
  htmlResult.classList.add("hidden");
}

let userInputs = {
  initiate: function () {
    // get car maker, model, and price ratio
    const htmlCarType = document.querySelector("#select-car-model").value;
    if (!!htmlCarType) {
      // get the first word
      (this.carMaker = htmlCarType.replace(/ .*/, "")),
        // get the rest of the string
        (this.carModel = htmlCarType.replace(/.* /, "")),
        // get the car price ratio from the list
        (this.carRatio = priceRatios.cars[this.carMaker][this.carModel]);
    }

    // get car year and diffrence from now
    const htmlCarYear = document.querySelector("#select-car-year").value;
    if (!!htmlCarYear) {
      (this.carYear = htmlCarYear),
        (this.carYearDiff = getYearShamsi() - this.carYear);
    }

    // get insurance type and price ratio
    const insuranceType = document.querySelector(
      'input[name="insurance-plan"]:checked'
    ).value;
    if (!!insuranceType) {
      (this.insuranceType = insuranceType),
        (this.insuranceRatio = priceRatios.insurancePlans[this.insuranceType]);
    }

    // calculate the final price
    this.finalPrice = calcPrice(
      this.carRatio,
      this.carYearDiff,
      this.insuranceRatio
    );
  },
};

priceRatios.cars.NewCar("dodge", "demon", 2);
priceRatios.cars.NewCar("chevrolet", "camaro", 1.6);
priceRatios.cars.NewCar("ford", "mustang", 1.3);
