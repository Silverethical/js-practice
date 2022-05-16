// Ex: فانکشن بسازید که تعداد ستاره وسط رو ما مشخص کنیم.

function starRepeat(starNumber = 5) {
  for (let a = 1; a < starNumber; a++) {
    console.log("*".repeat(a));
  }
  for (let b = starNumber; b >= 1; b--) {
    console.log("*".repeat(b));
  }
}

starRepeat(3);


console.log("");
console.log("==========================");
console.log("");

// Ex: فانکشنی بنویسید که یک رشته متنی بگیره
// و چک کنه ببینه چنتا از کلمه مورد نظرمون توش هست
function calcString(stringName, stringSearch) {
  if (!stringName || !stringSearch) {
    return "hehe!";
  } else {
    let stringCounter = 0,
      indexCounter = 0;
    for (let i = 0; i < stringName.length; i++) {
      if (stringName.includes(stringSearch, indexCounter)) {
        stringCounter++;
        indexCounter = stringName.indexOf(stringSearch, indexCounter) + 1;
      } else {
        return stringCounter;
      }
    }
  }
}

let myString = "saber saber saber saber saber";
console.log(calcString(myString, "saber"));
