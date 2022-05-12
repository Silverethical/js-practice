let xArray0 = [1, "mitra", 3, 4, 5,
    [1, 2, 3, "Sahar", 5,
        ["Amir", 2, 3, 4, "reza"],
        ["Ali", 2, 3, "javad",
            ["saber"],
            [1, 6, 9, 8,
                ["ghazaleh"]
            ]
        ]
    ]
]


// Ex1: Khone avale Tamame Araye Haye xArray0 Ro Chap Kone.
console.log("===========================================");
console.log("Ex1: Khone avale Tamame Araye Haye xArray0 Ro Chap Kone.");
console.log("------------");
for (let a = 0; a < xArray0.length; a++) {
  if (a == 0) {
    console.log(xArray0[a]);
  }
  if (Array.isArray(xArray0[a])) {
    for (let b = 0; b < xArray0[a].length; b++) {
      if (b == 0) {
        console.log(xArray0[a][b]);
      }
      if (Array.isArray(xArray0[a][b])) {
        for (let c = 0; c < xArray0[a][b].length; c++) {
          if (c == 0) {
            console.log(xArray0[a][b][c]);
          }
          if (Array.isArray(xArray0[a][b][c])) {
            for (let d = 0; d < xArray0[a][b][c].length; d++) {
              if (d == 0) {
                console.log(xArray0[a][b][c][d]);
              }
              if (Array.isArray(xArray0[a][b][c][d])) {
                for (let e = 0; e < xArray0[a][b][c][d].length; e++) {
                  if (e == 0) {
                    console.log(xArray0[a][b][c][d][e]);
                  }
                  if (Array.isArray(xArray0[a][b][c][d][e])) {
                    console.log(xArray0[a][b][c][d][e]);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

// Ex2: 2 Arraye Level3 ro mohtavasho Chap Kon
console.log("===========================================");
console.log("Ex2: 2 Arraye Level3 ro mohtavasho Chap Kon");
for (let a = 0; a < xArray0.length; a++) {
  if (Array.isArray(xArray0[a])) {
    for (let b = 0; b < xArray0[a].length; b++) {
      if (Array.isArray(xArray0[a][b])) {
        console.log("------------");
        for (let c = 0; c < xArray0[a][b].length; c++) {
          console.log(xArray0[a][b][c]);
        }
      }
    }
  }
}

// Special: hameye mohtavahaye tamame Arayeharo beriz to yek araye be esme specialArray
console.log("===========================================");
console.log(
  "Special: hameye mohtavahaye tamame Arayeharo beriz to yek araye be esme specialArray"
);
console.log("------------");
let specialArray = [];
for (let a = 0; a < xArray0.length; a++) {
  if (!Array.isArray(xArray0[a])) {
    specialArray.push(xArray0[a]);
  } else {
    for (let b = 0; b < xArray0[a].length; b++) {
      if (!Array.isArray(xArray0[a][b])) {
        specialArray.push(xArray0[a][b]);
      } else {
        for (let c = 0; c < xArray0[a][b].length; c++) {
          if (!Array.isArray(xArray0[a][b][c])) {
            specialArray.push(xArray0[a][b][c]);
          } else {
            for (let d = 0; d < xArray0[a][b][c].length; d++) {
              if (!Array.isArray(xArray0[a][b][c][d])) {
                specialArray.push(xArray0[a][b][c][d]);
              } else {
                for (let e = 0; e < xArray0[a][b][c][d].length; e++) {
                  if (!Array.isArray(xArray0[a][b][c][d][e])) {
                    specialArray.push(xArray0[a][b][c][d][e]);
                  } else {
                    console.log("khastam shod!");
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

console.log("SpecialArray:", specialArray);
