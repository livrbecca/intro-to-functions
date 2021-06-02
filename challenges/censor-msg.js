// use .split(), sep by ' '

function censorMessage(str, arr) {
  let rawWords = str.split(" ");
  let scrubbedWords = [];
  rawWords.forEach((word) => {
    let lowercaseWord = word.toLowerCase();
    if (arr.includes(lowercaseWord)) {
      scrubbedWords.push("*****");
    } else {
      scrubbedWords.push(lowercaseWord);
    }
  });
  let scrubbedMessage = scrubbedWords.join(" ");
  console.log(scrubbedMessage);
  return scrubbedMessage;
}

// test cases
console.log(
  censorMessage("dont mess with cats", ["mess"]),
  "test: should be dont ***** with cats"
);
console.log(
  censorMessage("are you sure this is safe", ["are", "is"]),
  "test: should be ***** you sure this ***** safe"
);
