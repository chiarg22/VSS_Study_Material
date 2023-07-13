// function even(x)
// {
//     if(x=== null || typeof x=== "string")
//     {
// return("Please enter a valid entry");
//     }
// else
// {
//     for (let i = 1; i <=x; i++)
//     { if (i%2==0)
//     console.log("I: ", i);
// }
// }
// }

// console.log(even(10));

function number(num) {
  if (num < 1 || num === null || num === "string") {
    let x = Number(num);
    console.log(x);
  }
}

console.log(number("abc"));
