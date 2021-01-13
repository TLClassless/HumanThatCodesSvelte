let words = [
  "Hello",
  "Olá",
  "Привет",
  "你好",
  "Ahoj",
  "Bonjour",
  "Kamusta",
  "Hei",
  "Aloha",
  "Ciao",
  "こんにちは",
  "여보세요",
  "Hallå",
  "Hi",
  "¿Qué tal?",
  "Salve",
  "Halløj",
  "Shalom",
  "Namastē",
  "Cześć",
  "Góðan dag",
  "مرحبا",
];

let getRandomWord = function () {
  return words[Math.floor(Math.random() * words.length)];
};

export let word = getRandomWord();

console.log(word);
