function myMax(arrayName) {
  let result = arrayName[0];
  for (let i = 0; i < arrayName.length; i++) {
    if (arrayName[i] > result) {
      result = arrayName[i];
    }
  }
  return result;
}

function myMin(arrayName) {
  let result = arrayName[0];

  for (let i = 0; i < arrayName.length; i++) {
    if (arrayName[i] < result) {
      result = arrayName[i];
    }
  }
  return result;
}

function myAverage(arrayName) {
  let result = 0;

  for (let i = 0; i < arrayName.length; i++) {
    x += arrayName[i];
  }

  result /= arrayName.length;

  return result;
}

let myArray = [10, 14, 19, 12, 14, 20, 17, 8];
