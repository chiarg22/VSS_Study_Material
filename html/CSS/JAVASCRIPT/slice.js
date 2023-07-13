// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// // Slicing an array -> Get a copy of those selected elements or range

// const newArr = arr.slice(2, 8, 2);

// console.log("OldArray: ", arr);
// console.log("NewArray: ", newArr);


// Write a function to calcuate the sum of every element of an array

// steps:
// number of elements
// start
// end
// clarifying the question
// creating the code on paper as we will create a fn and take the array as the output and calc the length of the array ad the create a loop and a var sum=0 outside the loop and will add and then get the final answer in the sum and then print it.
// Dry run
// if above is done then code
//check output 
// Debug it 
//READYYYYY


// const arr = [1,3,4,5,6,7,8,9,9];

// const arr = [5, -3, 10, -8, 2, -7, 15, -1, 6, -4, 12, -9, 3, -6, 11, -2, 8, -5, 14, -10];



// const arrSum = (arr)=>{
//     let number=arr.length;
//     let sum=0;
//     for(let i=0;i<number;i++)
//     {
//         // if((arr[i])%2==0)
//         if((arr[i])>0)
//         {
//             sum=sum+arr[i];
//         }
//     }
// return sum;
// }

// console.log(arrSum(arr));

// const arrSum = (arr)=>{
//     let number=arr.length;
//     let sum=undefined;
//     for(let i=0;i<number;i++)
//     {
//         // if((arr[i])%2==0)
//         if((arr[i])<0)
//         {
//             sum=sum+arr[i];
//         }
//     }
// return sum;
// }

// console.log(arrSum(arr));

// const arr = [1, 3, -4];

// let sub=0;
// const arrSum = (arr)=>{
//     let number=arr.length;
//     for(let i=0;i<number;i++)
//     {
//         sub=sub-arr[i];
//     }
// return sub;
// }

// console.log(arrSum(arr));

// *****
// If we do not need to take the sum as 0

// const arr = [1, 2, -7, -8];

// /**
//  * @description {Method to sum all array numbers}
//  * @param {Number[]} input
//  *
//  * Step 1   - Create a substraction variable with 0
//  * Step 2   - Iterate the array & add every element with sum variable
//  * Step 3   - Return the sum
//  */
// const arrNegativeSubtract = (romeshKaArray) => {
//   let sum = null;

//   for (let i = 0; i < romeshKaArray.length; i++) {
//     if (sum === null) {
//       sum = romeshKaArray[i];
//     } else {
//       sum = sum - romeshKaArray[i];
//     }
//     //sum = sum === null ? romeshKaArray[i] : sum - romeshKaArray[i];
//   }

//   return sum;
// };


// console.log(arrNegativeSubtract(arr));

const arr = [1, 2, -7, -7];

const arrNegativeSubtract = (input) => {

    let diff = 0;
        for(let i=0;i<input.length;i++){
            
            if(input[i]<0){
                if(diff===0)
{
    diff=input[i];
           
}
else
{
diff -= (input[i]);
}
        }
        return diff;
    }
}

    console.log(arrNegativeSubtract(arr));
