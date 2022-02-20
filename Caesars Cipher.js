/* Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

 */
function rot13(str) {
  const arr = str.split(' ');
  const newArr = [];

  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    var newWord = [];
    for (let n = 0; n < arr[i].length; n++) {
      var result = [];
      var newCode = arr[i].charCodeAt(n) + 13;
      if (newCode < 78 || newCode > 103) {
        newCode -= 13;
      } else if (newCode > 90) {
        newCode = newCode - 90 + 64;
      }
      var newChar = String.fromCharCode(newCode);
      newWord.push(newChar);
      result = newWord.join('');
    }

    newArr.push(result);
  }
  var finalResult = newArr.join(' ');
  console.log(finalResult);
  return finalResult;
}

rot13('SERR YBIR?');
