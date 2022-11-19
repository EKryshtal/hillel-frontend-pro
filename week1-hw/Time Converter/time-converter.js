const MINUTES_IN_HOURS = 60;
const SECONDS_IN_MINUTES = 60;

const hours = prompt('How much hours to convert?');

const minutes = hours * MINUTES_IN_HOURS;
const seconds = minutes * SECONDS_IN_MINUTES;

alert(seconds);