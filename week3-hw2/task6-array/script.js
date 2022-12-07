let arr = [];

for (let index = 0; index < Infinity; index++) {
  let element = prompt(`Please, enter element at index ${index}`);

  if (!element) {
    break;
  }

  arr.push(element);
}

alert(arr);

function compareNumeric(a, b) {
  if (a.length > b.length) return 1;
  if (a.length === b.length) return 0;
  if (a.length < b.length) return -1;
}

arr.sort(compareNumeric);
alert(arr);

arr.splice(1, 3);
alert(arr);
