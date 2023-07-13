// arr2="ankit";
// arr2=[1,2,3];
arr2 = "Madam";

function palindrome(arr) {
  let result = "";
  arr = arr.toLowerCase();
  console.log(arr);
  if (typeof arr !== "string") {
    console.log("Please provide a valid input");
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      // Add in forward direction
      result += arr[i]; // result = result + i

      //Add in reverse order
      //result = i + result;
    }
  }
  console.log(result);
  if (result === arr) {
    console.log("Palindrome");
  } else {
    console.log("Not a Palindrome");
  }
}

palindrome(arr2);

// ABHISHEK GUPTA  CODE

// checkPallindrome(str){
//     let res = "";
//     for(let i=str.length-1;i>=0;i--){
//       res = res+str[i]
//     }
//     if(res === str){
//       return true;
//     }
//     return false;
//   }

//   console.log(checkPallindrome("madam"))

// palindrome(arr2);

// ANKIT SIR CODE

// const checkPalindrome = (input) => {
//     input = input.toLowerCase();

//     let j = input.length - 1;

//     for (let i = 0; i < input.length / 2; i++) {
//       const currentElement = input[i];
//       const lastElement = input[j - i]; // input[j - i] -> input[5-1-0] -> input[4] -> "M"

//       if (currentElement !== lastElement) {
//         return false;
//       }
//     }

//     return true;
//   };
