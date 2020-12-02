const moize = require("moize").default;

function calc(num1, num2) {
  let result = 1;
  for (let i = 0; i < num1; i++) {
    result *= num2;
  }
  return result;
}

const moizedCalc = moize(calc);

function main() {
  calc(100, 3);
  let start = process.hrtime();
  for (let i = 0; i < 100; i++) {
    calc(100, 3);
  }
  console.log("time: ", process.hrtime(start)[1] / 1000000);

  console.log("***********************************************");

  moizedCalc(100, 3);
  start = process.hrtime();
  for (let i = 0; i < 100; i++) {
    moizedCalc(100, 3);
  }
  console.log("time: ", process.hrtime(start)[1] / 1000000);
}

main();