const btn = document.querySelector("#btn");
const form = document.querySelector("#form");
const formWrapper = document.querySelector("#form-wrapper");
const usernameInput = document.querySelector("#username");
const userCityInput = document.querySelector("#select");
const postOfficeNumberInput = document.querySelector("#novaposhta");
const emailInput = document.querySelector("#email");
const phoneNumberInput = document.querySelector("#phone");
const ccnInput = document.querySelector("#ccn");
const numberOfItemsInput = document.querySelector("#items");

btn.addEventListener("click", () => {
  if (formWrapper.style.display === "none") {
    showModal();
  } else {
    hideModal();
  }
});

const showModal = () => {
  formWrapper.style.display = "flex";
};

const hideModal = () => {
  formWrapper.style.display = "none";
};

const hideBuyButton = () => {
  btn.style.display = "none";
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const formObj = {};

  for (const [name, value] of data) {
    if (!formObj[name]) {
      formObj[name] = value;
    } else {
      formObj[name] = `${formObj[name]}, ${value}`;
    }
  }

  let isValid = validateInputs();
  if (!isValid) {
    return;
  }
  hideModal();
  hideBuyButton();
  showPurchaseInfo(formObj);
});

function showPurchaseInfo(info) {
  const purchaseInfo = document.createElement("ul");

  delete info.ccn;

  for (const [key, value] of Object.entries(info)) {
    const listItem = document.createElement("li");
    listItem.innerText = `${key}: ${value}`;

    purchaseInfo.appendChild(listItem);
  }
  const description = document.querySelector("#description");

  description.appendChild(purchaseInfo);
}

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const validateInputs = () => {
  const username = usernameInput.value.trim();
  const userCity = userCityInput.value;
  const postOfficeNumber = Number(postOfficeNumberInput.value);
  const email = emailInput.value;
  const phoneNumber = phoneNumberInput.value;
  const ccn = ccnInput.value;
  const numberOfItems = Number(numberOfItemsInput.value);
  let isValid = true;

  !username
    ? setError(usernameInput, "Username is required")((isValid = false))
    : setSuccess(usernameInput);

  !username.match(/^[a-zA-Z]*\s{1}[a-zA-Z]*$/)
    ? setError(
        usernameInput,
        "Please, enter your First and Last name"
      )((isValid = false))
    : setSuccess(usernameInput);

  !userCity
    ? setError(userCityInput, "City is required")((isValid = false))
    : setSuccess(userCityInput);

  postOfficeNumber <= 0
    ? setError(
        postOfficeNumberInput,
        "Post office number is required"
      )((isValid = false))
    : setSuccess(postOfficeNumberInput);

  email.length === 0
    ? setError(emailInput, "Email is required")((isValid = false))
    : setSuccess(postOfficeNumberInput);

  !email.match(/^[a-zA-Z\._\-0-9]*@[a-zA-Z]*[\.][a-z]{2,4}$/)
    ? setError(
        emailInput,
        "Please, enter correct email address"
      )((isValid = false))
    : setSuccess(emailInput);

  !phoneNumber
    ? setError(phoneNumberInput, "Invalid phone number")((isValid = false))
    : setSuccess(phoneNumberInput);

  !phoneNumber.match(/^\+[0-9]{12}$/)
    ? setError(
        phoneNumberInput,
        "Please, match the requested format"
      )((isValid = false))
    : setSuccess(phoneNumberInput);

  !ccn || !Number(ccn) || ccn.length < 13 || ccn.length > 16
    ? setError(ccnInput, "Enter valid credit card number")((isValid = false))
    : setSuccess(ccnInput);

  numberOfItems <= 0
    ? setError(numberOfItemsInput, "Count is required")((isValid = false))
    : setSuccess(numberOfItemsInput);

  return isValid;
};
