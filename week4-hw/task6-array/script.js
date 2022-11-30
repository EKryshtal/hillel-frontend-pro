let arr = [];

for (let index = 0; index < Infinity; index++) {
  let element = prompt(`Please, enter element at index ${index}`);

  if (!element) {
    break;
  }

  arr.push(element);
}

alert(arr);

arr.sort();
alert(arr);

arr.splice(1, 3);
alert(arr);
