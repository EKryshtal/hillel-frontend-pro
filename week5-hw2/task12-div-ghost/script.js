const textarea = document.querySelector("#text");
const ghost = document.querySelector("#ghost");

textarea.addEventListener("focus", function () {
  ghost.style.display = "block";
});

textarea.addEventListener("focusout", function () {
  ghost.style.display = "none";
});
