// arr2 = "Navneet";
// // arr2 = [1, 2, 3];

// function reverse(arr) {
//   let result = "";
//   if (typeof arr !== "string") {
//     console.log("Please provide a valid input");
//   } else {
//     for (let i = arr.length - 1; i >= 0; i--) {
//       // Add in forward direction
//       result += arr[i]; // result = result + i

//       //Add in reverse order
//       //result = i + result;
//     }
//   }
//   console.log(result);
// }

// reverse(arr2);

arr2 = "Yash";
function revstr(arr2) {
  let res = "";
  if (typeof arr2 === "string") {
    for (let i = arr2.length - 1; i >= 0; i--) {
      res = res + arr2[i];
    }
  } else {
    console.log("Please input a valid string.");
  }
  console.log(res);
}

revstr(arr2);
