

// function count(arr,num)
// {         x=0;
//     if(isNaN(num)==true || Array.isArray(arr)==false)
//     {
//         return(-1);
//     }
//     else
//     {
//     for(i=0;i<arr.length;i++)
//     {
//         if(arr[i]==num)
//         {
//             x++;
//         }
//     }
// }
// return(x);
// }

// console.log(count(arr,2));

// Count the number of occurences of each number

arr=[1,2,3,4,1,2,3,4,5,6,7,8,1,2];

//  arr=[1,1,2,3];
// function count(arr)
// {
// for(let i=0;i<arr.length;i++)
//     { 
//         let x=0;
//     for(let j=0;i<arr.length;j++)
// {  
//     if(arr[i]===arr[j])
//     {
//         x++;
//     }

// }   
// console.log(arr[i]);
// console.log(x);
//     }
// }

// count(arr);

function count(arr) {
    for (let i = 0; i < arr.length; i++) {
      let x = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          x++;
        }
      }
      console.log(arr[i],":",x);
    //   console.log(x);

    }
  }
  
  count(arr);
