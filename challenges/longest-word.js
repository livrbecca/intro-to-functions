function longestInList(arr) {
  let longest = "";
  for (let i = 0; i < arr.length; i++) {
    if (longest.length < arr[i].length) {
      longest = arr[i];
    }
  }
  return longest;
}

console.log(
  longestInList(["England", "Wales", "Scotland", "Northern Ireland"]),
  "should be Northern Ireland"
);
console.log(
  longestInList(["the", "quick", "brown", "fox"]),
  'should be "quick'
);
console.log(
  longestInList(["hello", "hi", "greetings", "hey"]),
  'should be "greetings'
);
