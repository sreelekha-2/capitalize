//1.longest word

const sentence = 'I woke up early today morning';
// const sentence = 'I went straight to the beach';
const arr = sentence.split(' ');

let longArr = [];

function longestWord(sentence) {
  let longest = '';
  arr.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    } else if (word.length === longest.length) {
      longArr.push(word);
    }
  });
  longArr.unshift(longest);
  return longArr;
}

console.log(longestWord(sentence));

//2.capitalize

const newArr = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
console.log(newArr.join(' '));
