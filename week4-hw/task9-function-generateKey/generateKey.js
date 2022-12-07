const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

function generateKey(length, characters) {
  let randomKey = '';

  for (let i = 0; i < length; i++) {
    randomKey += characters[Math.floor(Math.random() * characters.length)];
  }
  
  return randomKey;
}

console.log(generateKey(16, characters));