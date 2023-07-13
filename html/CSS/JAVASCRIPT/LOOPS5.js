let string = "";
for (let i = 1; i <= 5; i++) {
  for (let j = i; j <= 5; j++) {
    string += j;
  }
  string += "\n";
}

console.log(string);
