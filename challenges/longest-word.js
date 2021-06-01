// walk through
// longest = empty var
// for loop: initialize i, i less than word length, increment i, so 0 is a number
// if the length of longest is less than whatever index in the array,
// set longest to that new index, indicated by i


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
