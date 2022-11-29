//1

for (let startNum = 20; startNum <= 30; startNum += 0.5) {
  console.log(startNum);
}

//2

const DOLLAR_EXCHANGE_RATE = 27;

for (let startNum = 10; startNum < 101; startNum += 10) {
  console.log(DOLLAR_EXCHANGE_RATE * startNum);
}

//3

const MAX_SQUARE_NUM = 92;

for (let startNum = 1; startNum < 101; startNum++) {
  if (startNum ** 2 > maxSquareNum) {
    break;
  }
  console.log(startNum);
}

//4

const NUMBER_TO_CHECK = 943;

let startNum = 2;

while (startNum < NUMBER_TO_CHECK) {
  if (NUMBER_TO_CHECK % startNum === 0) {
    console.log("Not a primary number", NUMBER_TO_CHECK);
    break;
  } else if (
    NUMBER_TO_CHECK % startNum > 0 &&
    startNum === NUMBER_TO_CHECK - 1
  ) {
    console.log("Is a primary number", NUMBER_TO_CHECK);
  }

  startNum++;
}

//5

const SOME_NUMBER = 274598;
const NUMBER_TO_POWER = 3;

let toPower = 0;
let result = NUMBER_TO_POWER ** toPower;

while (result <= SOME_NUMBER) {
  if (SOME_NUMBER === result) {
    console.log(
      `${SOME_NUMBER} is ${NUMBER_TO_POWER} in the power of ${toPower}`
    );
    break;
  }

  toPower++;
  result = NUMBER_TO_POWER ** toPower;

  if (result > SOME_NUMBER) {
    console.log(`${SOME_NUMBER} is not ${NUMBER_TO_POWER} in any power`);
  }
}
