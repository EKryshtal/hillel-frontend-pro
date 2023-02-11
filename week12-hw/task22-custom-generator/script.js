function Boo() {
  const array = [1, 2, 3];
  let startNumber = 0;
  
  return {
    next: function () {
      return startNumber < array.length
        ? { value: array[startNumber++], done: false }
        : { value: undefined, done: true };
    },
  };
}

const iterator = Boo();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().done);
