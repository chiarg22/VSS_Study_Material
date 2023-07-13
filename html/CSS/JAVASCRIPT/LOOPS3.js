// let k=5;
// for(let j=0;j<5;j++)
// {
//     for(let i=0;i<k;i++)
//     {
//         console.log("*");

//     }
//     console.log("\n");
// k=k-1;
// }

// let k=5;
// for(let i=0;i<5;i++)
// {
//     for(let j=0;j<k;j++)
//     {
//         console.log("*");

//     }
//     console.log("\n");
// k=k-1;
// }

let k = 5;
let string = "";
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < k; j++) {
    string += "*";
  }
  string += "\n";
  k = k - 1;
}

console.log(string);
