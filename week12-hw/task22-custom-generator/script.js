const array = [1, 2, 3];
let startNumber = 0;

function Boo() {
  return {
    next: function () {
      if (startNumber < array.length) {
        return { value: array[startNumber++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    },
  };
}

const iterator = Boo();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);
