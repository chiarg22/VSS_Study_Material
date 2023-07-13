// Number of Occurences

const occurenceCount = (input) => {
  const mapping = {};

  for (let i = 0; i < input.length; i++) {
    const chiragKiKey = input[i];

    if (mapping.hasOwnProperty(chiragKiKey)) {
      console.log(mapping);
      mapping[chiragKiKey] = mapping[chiragKiKey] + 1; // 2 + 1
      //   mapping[chiragKiKey]+1 = mapping[chiragKiKey];
      // mapping[chiragKiKey];// Creation of new key here only.
      //key: value + 1
    } else {
      mapping[chiragKiKey] = 1;
      //mapping[1]=mapping[1]+1//      mapping[1]
    }
    console.log(mapping);
  }
  console.log(Object.keys(mapping));
  console.log(Object.values(mapping));
  const a = Object.keys(mapping);
  console.log(a);

  return mapping;
};

console.log(occurenceCount(["a", "b", "c", "d", "a", "c", "b", "d"]));

// 1, 2, 3, 4, 1, 3, 4, 6, 1, 5;

// Object.keys(Object);// to fetch the keys of an object and convert it into the array-[ 'a', 'b', 'c', 'd' ]
//Object.keys(Object);
// mapping.chiragKiKey;
// mapping[chiragKiKey];
