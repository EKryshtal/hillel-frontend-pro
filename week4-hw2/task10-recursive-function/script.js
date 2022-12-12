function pow(num, degree) {
  if (degree < 1) {
    return alert(`You can't enter ${degree}! Use only natural numbers`);
  }

  if (degree === 1) {
    return num;
  }

  return num * pow(num, degree - 1);
}

console.log(pow(3, 5));
