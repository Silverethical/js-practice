const operators = ["+", "-", "*", "/"],
  allPossibleOperations = arrayCreate(operators, 3);

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

/** calculate the solutions */
calculateSolutions([3, 1, 8, 5], 10);

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
          if (eval(calculation) === goal) {
            /** push the calculation to the result array */
            result.push(calculation);
          }
        }
      }
    }

    /** log the number of solutions */
    console.log(`There are ${result.length} solutions.`);

    /** log the solutions */
    console.log("Solutions: ", result);

    /** end measuring time */
    let timeTaken = performance.now() - start;

    /** log time taken to calculate all these */
    console.log("Total time taken : " + timeTaken + " milliseconds");
  } catch (error) {
    /** log error */
    console.error(error);
    return false;
  }
}
