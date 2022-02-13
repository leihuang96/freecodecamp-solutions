/* Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.

 */

function whatIsInAName(collection, source) {
  return collection.filter(function (obj) {
    return Object.keys(source).every(function (el) {
      /* The Object.keys() method returns an array of a given object's own enumerable property names. */
      /* The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value. */
      return obj[el] == source[el];
    });
  });
}

whatIsInAName(
  [
    { first: 'Romeo', last: 'Montague' },
    { first: 'Mercutio', last: null },
    { first: 'Tybalt', last: 'Capulet' },
  ],
  { last: 'Capulet' }
);