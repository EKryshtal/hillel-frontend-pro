const USERS = [
  {
    balance: "$2,226.60",
    name: "Eugenia Sawyer",
    phone: "+1 (840) 583-3207",
  },
  {
    balance: "$2,613.77",
    name: "Pauline Gallegos",
    phone: "+1 (985) 593-3328",
  },
  {
    balance: "$3,976.41",
    name: "Middleton Chaney",
    phone: "+1 (995) 591-2478",
  },
  {
    balance: "$1,934.58",
    name: "Burns Poole",
    phone: "+1 (885) 559-3422",
  },
  {
    balance: "$3,261.65",
    name: "Mcfadden Horne",
    phone: "+1 (942) 565-3988",
  },
  {
    balance: "$1,790.56",
    name: "Suzette Lewis",
    phone: "+1 (837) 586-3283",
  },
];

const formattedUsers = USERS.map(function (user) {
  user.balance = parseFloat(user.balance.replace("$", "").replace(",", ""));
  return user;
});

const filteredUsers = formattedUsers.filter(function (user) {
  if (user.balance > 2000) {
    return true;
  }
});

const usersPhoneNumbers = filteredUsers.map(function (user) {
  return user.phone;
});

const balanceSum = formattedUsers.reduce(function (accumulator, currentValue) {
  return Math.round((accumulator + currentValue.balance) * 100) / 100;
}, 0);

console.log(usersPhoneNumbers);
console.log(balanceSum);
