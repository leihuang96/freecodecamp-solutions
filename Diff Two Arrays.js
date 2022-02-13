/**Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.**/

function diffArray(arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  console.log(arr3);
  var diff = [];
  for (let i = 0; i < arr3.length; i++) {
    if (arr3.lastIndexOf(arr3[i]) == arr3.indexOf(arr3[i])) {
      diff.push(arr3[i]);
    }
  }
  return diff;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
