/* Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes. */

function spinalCase(str) {
  let result = str
    .split(/\s|_|(?=[A-Z])/g)
    .join('-')
    .toLowerCase();
  return result;
}

spinalCase('The_Andy_Griffith_Show');
