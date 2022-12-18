const arr = [1, 2, [1.1, 1.2, 1.3], 3];
const ul = document.querySelector("#list");

function generateList(item) {
  if (Array.isArray(item)) {
    const subList = document.createElement("ul");

    item.forEach((element) => {
      const li = generateList(element);
      subList.appendChild(li);
    });

    return subList;
  }

  const li = document.createElement("li");
  li.innerText = item;

  return li;
}

const list = generateList(arr);
ul.appendChild(list);
