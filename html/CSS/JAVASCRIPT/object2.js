const names = [
  "ankit",
  "chirag",
  "mitesh",
  "mahesh",
  "ankit",
  "sanket",
  "Sanket",
];

const countNames = (input) => {
  const mapping = {};

  for (let i = 0; i < input.length; i++) {
    const chiragKiKey = input[i].toLowerCase();
    console.log(chiragKiKey);

    if (mapping.hasOwnProperty(chiragKiKey)) {
      mapping[chiragKiKey] = mapping[chiragKiKey] + 1; // 2 + 1
      //   mapping[chiragKiKey]+1 = mapping[chiragKiKey];
    } else {
      mapping[chiragKiKey] = 1; //mapping[1]=mapping[1]+1//      mapping[1]
    }
  }

  return mapping;
};

console.log(countNames(names));
// Output -  {"ankit": 2, "chirag": 1, "mitesh": 1, "mahesh": 1, "sanket" : 2}

//Algo
//take the input and put each name into the object
// now convert to lower one and then apply hasown
// and return the answer
//
