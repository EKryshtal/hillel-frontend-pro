const NUMBER_ARRAY = [1, 2, 3, 4, 5, 6, 7];
const VALUE_TO_REMOVE = 5;

function removeElement(array, itemToRemove) {
  return array.filter((item) => {
    return item !== itemToRemove;
  });
}

const filteredArray = removeElement(NUMBER_ARRAY, VALUE_TO_REMOVE);

console.log(filteredArray);