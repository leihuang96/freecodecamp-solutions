/* Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.

- If a word begins with a vowel, just add way at the end. */

function translatePigLatin(str) {
  const arr = str.split('');
  if (str.match(/^[aeiou AEIOU]/)) {
    arr.push('way');
  } else if (
    str.match(
      /^([bcdfgpt][r])|^([cstw][h])|^([cfgps][l])|^([s][c])|^([s][k])|^([s][m])|^([s][n])|^([s][p])|^([s][t])|^([st][w])/
    )
  ) {
    arr.push(arr[0], arr[1], 'ay');
    arr.splice(0, 2);
  } else if (
    str.match(
      /^([sch])^([scr])|^([shr])|^([sph])|^([spl])|^([spr])|^([squ])|^([str]|^([thr]))/
    )
  ) {
    arr.push(arr[0], arr[1], arr[2], 'ay');
    arr.splice(0, 3);
  } else {
    arr.push(arr[0], 'ay');
    arr.splice(0, 1);
  }
  console.log(arr.join(''));
  return arr.join('');
}

translatePigLatin('rhythm');
