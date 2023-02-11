/** selectors */
const allInputs = document.querySelectorAll("input"),
  numbersInput = document.querySelector("#numbers"),
  goalInput = document.querySelector("#goal"),
  findSolutionsButton = document.querySelector("#findSolutionsButton"),
  answersDiv = document.querySelector("#answers"),
  numberOfSolutions = document.querySelector(".numberOfSolutions");

const operators = ["+", "-", "*", "/"],
  allPossibleOperations = arrayCreate(operators, 3);

/** add additional operators where there are more than one instance of the one operator */
for (const operator of operators) {
  allPossibleOperations.push(
    [operator, operator, "+"],
    [operator, operator, "-"],
    [operator, operator, "*"],
    [operator, operator, "/"],
    [operator, "+", "+"],
    [operator, "-", "-"],
    [operator, "*", "*"],
    [operator, "/", "/"]
  );
}

/** initialize result for later to store solutions in */
let result = [];

/** when document is ready */
document.addEventListener("DOMContentLoaded", () => {
  for (const input of allInputs) {
    input.addEventListener("input", validation);
  }

  findSolutionsButton.addEventListener("click", () => {
    /** calculate the solutions */
    calculateSolutions(numbersInput.value.split(""), goalInput.value);
  });
});

/**
 * return all possible combination of an array
 * @param {object} array - an array
 * @param {number} size - size of the combination
 * @returns
 */
function arrayCreate(array, size) {
  let newArray = [];
  array.forEach(
    (function iter(parts) {
      return function (v) {
        let temp = parts.concat(v);
        if (parts.includes(v)) {
          return;
        }
        if (temp.length === size) {
          newArray.push(temp);
          return;
        }
        array.forEach(iter(temp));
      };
    })([])
  );
  return newArray;
}

/**
 * calculate all the solutions to get to desired number with 4 numbers
 * @param {object} numbers - an array of numbers
 * @returns
 */
function calculateSolutions(numbers, goal) {
  try {
    /** check if the numbers parameter is an array with 4 indexes */
    if (!Array.isArray(numbers) || numbers.length != 4)
      /** throw an error */
      throw new Error("Please specify an array with 4 numbers");

    /** remove previously calculated result */
    result = [];

    /** start measuring time */
    let start = performance.now();

    /** create all possible combination of the given numbers */
    const allNumCombinations = arrayCreate(numbers, 4);

    /** loop over all the possible combination of numbers */
    for (const numCombinations of allNumCombinations) {
      /** loop over all the possible operations */
      for (const possibleOperations of allPossibleOperations) {
        /** make a calculation list with parentheses in different parts */
        const calculationList = [
          "(" +
            numCombinations[0] +
            possibleOperations[0] +
            numCombinations[1] +
            possibleOperations[1] +
            numCombinations[2] +
            possibleOperations[2] +
            numCombinations[3] +
            ")",
          "(" +
            numCombinations[0] +
            possibleOperations[0] +
            numCombinations[1] +
            possibleOperations[1] +
            numCombinations[2] +
            ")" +
            possibleOperations[2] +
            numCombinations[3],
          "(" +
            numCombinations[0] +
            possibleOperations[0] +
            numCombinations[1] +
            ")" +
            possibleOperations[1] +
            numCombinations[2] +
            possibleOperations[2] +
            numCombinations[3],
          numCombinations[0] +
            possibleOperations[0] +
            "(" +
            numCombinations[1] +
            possibleOperations[1] +
            numCombinations[2] +
            possibleOperations[2] +
            numCombinations[3] +
            ")",
          numCombinations[0] +
            possibleOperations[0] +
            numCombinations[1] +
            possibleOperations[1] +
            "(" +
            numCombinations[2] +
            possibleOperations[2] +
            numCombinations[3] +
            ")",
          numCombinations[0] +
            possibleOperations[0] +
            "(" +
            numCombinations[1] +
            possibleOperations[1] +
            numCombinations[2] +
            ")" +
            possibleOperations[2] +
            numCombinations[3],
        ];

        /** loop over the calculation list */
        for (const calculation of calculationList) {
          /** if calculation equals the desired number */
          if (eval(calculation) === Number(goal)) {
            /** replace "*" and "/" with "×" and "÷" for better readability */
            const solution = calculation
              .replaceAll("*", "×")
              .replaceAll("/", "÷");

            /** check if calculation is not already in result */
            if (!result.includes(solution))
              /** push the calculation to the result array */
              result.push(solution);
          }
        }
      }
    }

    /** log the number of solutions */
    // console.log(`There are ${result.length} solutions.`);

    /** log the solutions */
    // console.log("Solutions: ", result);

    /** end measuring time */
    let timeTaken = performance.now() - start;

    /** log time taken to calculate all these */
    console.log("Total time taken : " + timeTaken + " milliseconds");

    /** print solutions in page */
    printResult(result);
  } catch (error) {
    /** log error */
    console.error(error);
    return false;
  }
}

/**
 * input validation
 */
function validation() {
  if (
    Number(numbersInput.value) &&
    Number(goalInput.value) &&
    numbersInput.value.length === 4 &&
    goalInput.value.length <= 4
  ) {
    findSolutionsButton.disabled = false;
  } else {
    findSolutionsButton.disabled = true;
  }
}

/**
 * print all the solutions in document
 * @param {object} solutions - an array of all the solutions
 */
function printResult(solutions) {
  answersDiv.innerHTML = "";
  numberOfSolutions.textContent = `(${solutions.length})`;

  for (const solution of solutions) {
    answersDiv.innerHTML += `<p>${solution}</p>`;
  }
}
