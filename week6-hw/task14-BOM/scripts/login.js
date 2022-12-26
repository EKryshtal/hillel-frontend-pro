const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");
const loader = document.querySelector("#loader");

function onSumbit(event) {
  event.preventDefault();

  console.log(emailInput.value);
  console.log(passInput.value);
  
  showLoader();

  setTimeout(() => {
    location = "./my-profile-page.html";
  }, 2000);
}

function showLoader() {
  loader.style.display = "block";
}
