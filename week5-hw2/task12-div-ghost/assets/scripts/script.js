const textarea = document.querySelector("#text");
const container = document.querySelector("#container");

textarea.addEventListener("focus", function () {
  const div = document.createElement("div");

  div.id = "ghost";
  div.className = "ghost";

  container.append(div);
});

textarea.addEventListener("focusout", function () {
  const ghost = document.querySelector('#ghost');

  ghost.remove()
});
