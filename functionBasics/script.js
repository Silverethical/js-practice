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


// ==========================================
// فانکشن بنویسید که سانتیمتر را بگیرد و به متر تبدیل کند

function centToMetr(centNum = 0) {
  let result = centNum / 100;

  return result;
}

console.log(centToMetr(40));

