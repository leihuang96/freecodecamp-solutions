/* Everything Be True
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

Remember, you can access object properties through either dot notation or [] notation. */

function truthCheck(collection, pre) {
  const mapKeys = collection.map((el) => Object.keys(el));
  const mapValue = collection.map((el) => el[pre]);
  var count = 0;
  console.log(mapValue);
  console.log(Object.keys(collection).length);
  for (let i = 0; i < mapValue.length; i++) {
    if (typeof mapValue[i] !== 'undefined' && Boolean(collection[i][pre])) {
      count++;
    }
  }
  return count == Object.keys(collection).length;
}

truthCheck(
  [
    { user: 'Tinky-Winky', sex: 'male', age: 0 },
    { user: 'Dipsy', sex: 'male', age: 3 },
    { user: 'Laa-Laa', sex: 'female', age: 5 },
    { user: 'Po', sex: 'female', age: 4 },
  ],
  'age'
);
