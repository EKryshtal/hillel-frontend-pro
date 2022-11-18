const operation = prompt("Enter operation");

const firstNumber = prompt("Enter first number");

const secondNumber = prompt("Enter second number");

const allowedOperands = ["+", "-", "/", "*"];

if (!operation || !allowedOperands.includes(operation)) {
  alert("Incorrect operation value");
  throw new Error("Incorrect operation value");
} else if (
  !firstNumber ||
  (!Number(firstNumber) && Number(firstNumber) !== 0)
) {
  alert("Incorrect first number value");
  throw new Error("Incorrect first number value");
} else if (
  !secondNumber ||
  (!Number(secondNumber) && Number(secondNumber) !== 0)
) {
  alert("Incorrect second number value");
  throw new Error("Incorrect second number value");
}

const result = eval(`${firstNumber} ${operation} ${secondNumber}`);

alert(`Your result: ${result}`);
