// ==========================================
// مدرسه

let school = {
  class1: {
    student1: {
      fullName: "Erwin Smith",
      grade: 22,
      phoneNumber: "09171234567",
      nationalID: "1234567890",
      age: 37,
    },
    student2: {
      fullName: "Levi Ackerman",
      grade: 20,
      phoneNumber: "09178294842",
      nationalID: "5678901234",
      age: 33,
    },
    student3: {
      fullName: "Dot Pixys",
      grade: 18,
      phoneNumber: "09330987654",
      nationalID: "0987654321",
      age: 52,
    },
    student4: {
      fullName: "Nile Dok",
      grade: 16,
      phoneNumber: "09307590284",
      nationalID: "5432167890",
      age: 38,
    },
  },
  class2: {
    student1: {
      fullName: "Reiner Braun",
      grade: 19,
      phoneNumber: "09171171717",
      nationalID: "9364836484",
      age: 19,
    },
    student2: {
      fullName: "Porco Galliard",
      grade: 18,
      phoneNumber: "09377373737",
      nationalID: "2749264837",
      age: 17,
    },
    student3: {
      fullName: "Gabi Braun",
      grade: 20,
      phoneNumber: "09987654321",
      nationalID: "8355032645",
      age: 13,
    },
    student4: {
      fullName: "Falco Grice",
      grade: 16,
      phoneNumber: "09987654312",
      nationalID: "1946352956",
      age: 14,
    },
  },
  class3: {
    student1: {
      fullName: "Eren Yeager",
      grade: 14,
      phoneNumber: "09172849385",
      nationalID: "3857356253",
      age: 16,
    },
    student2: {
      fullName: "Mikasa Ackerman",
      grade: 18,
      phoneNumber: "09362189463",
      nationalID: "2659067483",
      age: 16,
    },
    student3: {
      fullName: "Armin Arlert",
      grade: 15,
      phoneNumber: "09300193845",
      nationalID: "1856479832",
      age: 16,
    },
    student4: {
      fullName: "Jean Kirstein",
      grade: 17,
      phoneNumber: "09393393939",
      nationalID: "9463829856",
      age: 17,
    },
  },
};

// Final Attempt
function calcSchool(objectName) {
  let result = {};
  for (let i = 1; i <= Object.keys(objectName).length; i++) {
    result["class" + i] = { grade: 0 };
    for (let j = 1; j <= Object.keys(objectName["class" + i]).length; j++) {
      if (
        objectName["class" + i]["student" + j].grade > result["class" + i].grade
      ) {
        result["class" + i].grade =
          objectName["class" + i]["student" + j].grade;
        result["class" + i] = {
          fullName: objectName["class" + i]["student" + j].fullName,
          grade: objectName["class" + i]["student" + j].grade,
        };
      }
    }
    console.log(
      "Top Grade in Class " + i,
      "is:",
      result["class" + i].grade,
      "\nEarned by:",
      result["class" + i].fullName
    );
  }
  return result;
}

console.log(calcSchool(school));

/* First Attempt
function calcSchool(objectName) {
  let result = {
    grade: 0,
  };
  for (let i = 1; i <= Object.keys(objectName).length; i++) {
    for (let j = 1; j <= Object.keys(objectName["class" + i]).length; j++) {
      if (objectName["class" + i]["student" + j].grade > result.grade) {
        result = {
          fullName: objectName["class" + i]["student" + j].fullName,
          grade: objectName["class" + i]["student" + j].grade,
        };
      }
    }
    console.log("Top grade in Class", i, "is:", result.grade);
    console.log("Earned by:", result.fullName);
    console.log("");
    result.grade = 0;
  }
}

calcSchool(school);
*/
