const CURRENT_YEAR = 2022;
const MINIMUM_YEAR_OF_BIRTH = 1922;

const yearOfBirth = prompt("Please, enter year of your birth");
let userAge = `Your age is ${CURRENT_YEAR - yearOfBirth}`;

if (!yearOfBirth) {
  userAge = "You didn't enter your year of birth!";
  alert("Such a pity that you didn't want to enter your year of birth");
} else if (Number.isNaN(+yearOfBirth)) {
  userAge = "You enter incorrect year of birth!";
  alert("Incorrect year of birth! Please, enter a number");
} else if (+yearOfBirth > CURRENT_YEAR) {
  userAge = "You are too young!";
  alert(
    `Are you sure you were even born? The year of birth must be from ${MINIMUM_YEAR_OF_BIRTH} to ${CURRENT_YEAR}`
  );
} else if (+yearOfBirth < MINIMUM_YEAR_OF_BIRTH) {
  userAge = "You are too old!";
  alert(
    `Are you typing from a sarcophagus? The year of birth must be from ${MINIMUM_YEAR_OF_BIRTH} to ${CURRENT_YEAR}`
  );
}

const cityOfResidence = prompt("Please, enter your city of residence");
let userLocation = `You live in ${cityOfResidence} city`;

if (!cityOfResidence) {
  userLocation = "You didn't enter a city!";
  alert("Such a pity that you didn't want to enter your city of residence");
}

switch (cityOfResidence) {
  case "Kyiv": {
    userLocation = "You live in the capital of Ukraine";
    break;
  }
  case "Washington": {
    userLocation = "You live in the capital of United States";
    break;
  }
  case "London": {
    userLocation = "You live in the capital of Great Britain";
    break;
  }
}

const kindOfSport = prompt("Please, enter your favorite kind of sport");
let userKindOfSport = `Your favorite kind of sport is ${kindOfSport}`;

if (!kindOfSport) {
  userKindOfSport = "You didn't enter your favorite kind of sport!";
  alert("Such a pity that you didn't want to enter your city of residence");
}

switch (kindOfSport) {
  case "football": {
    userKindOfSport = "Cool! So you want to be like Adrian Peterson?";
    break;
  }
  case "basketball": {
    userKindOfSport = "Cool! So you want to be like Dwyane Wade?";
    break;
  }
  case "volleyball": {
    userKindOfSport = "Cool! So you want to be like Karch Kiraly?";
    break;
  }
}

alert(`
  ${userAge} 
  ${userLocation} 
  ${userKindOfSport}
`);
