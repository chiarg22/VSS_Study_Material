// // // // const inputA = [1, 2, 3, 4, 5, 1];
// // // // const inputB = [1, 2, 3, 4, 5, 1, 7, 6, 4, 3, 8];
// // // // let len1= inputA.length;
// // // // let len2= inputB.length;
// // // // let i=0; 
// // // // let j=0; 
// // // // //     for (let i = 0; i <=len1; i++)
// // // // //      {     for (let j = 0; j <=len2; j++) 
// // // // //         {
// // // // //             if(inputA[i]==inputB[j])
// // // // //       console.log("Union: ", j);
// // // // //     }
// // // // //   }
  
  
// // // // while (i < len1 && j < len2) {
// // // //     if (inputA[i] <= inputB[j])
// // // //         cout << inputA[i] << " ";

// // // //     else if (inputA[j] <= inputB[i])
// // // //         cout << inputB[j] << " ";

// // // //     else {
// // // //         cout << inputB[j] << " ";
    
// // // //     }
// // // //     i++;
// // // //     j++;
// // // // }
// // // // // }
// // // // //     for(i=0;i < m)
// // // // //         cout << arr1[i++] << " ";
 
// // // // //     while (j < n)
// // // // //         cout << arr2[j++] << " ";

// // // function printLoop(num) {
// // //     let result = "";
// // //     for (let i = 1; i <= num; i++) {
// // //       // Add in forward direction
// // //       result += i; // result = result + i
  
// // //       //Add in reverse order
// // //       //result = i + result;
// // //     }
  
// // //     return result;
// // //   }
  
// // //   console.log(printLoop(12));
// // // const k=5;
// // // const i=2;
// // // let pattern = '';
// // // if(i%2==0)
// // //       {
// // //         for (let j = k; j >= 1; j--) {
// // //           pattern += j;
// // //     }
// // // }
// // // console.log(pattern);

// // let k=10;
// // let pattern = '';
// // for (let i = 1; i <= 11;i++) {
// //     let pattern = '';
// //     if(i%2==0)
// //        {
// //          for (let j = k; j > 1; j--) {
// //            pattern += j;
// //      }
// //  }
// //     else 
// //     {
// //         for (let j = i; j <= k; j++) {
// //       pattern += j;
// //     } 
// // }
// //     k=k-1;
// //     console.log(pattern);
// // }





// // // let k=0;
// // // function printStarPattern(rows) {
// // //     k=rows-1;
// // //     for (let i = 1; i <= rows; i++) {
// // //       let pattern = '';
// // //       for (let j = i; j <= k; j++) {
// // //         pattern += j;
// // //       } 
// // //       if(i%2==0)
// // //       {
// // //         for (let j = k; j >= 1; j--) {
// // //           let pattern = '';
// // //           pattern += j;
// // //     }
// // //       k=k-1;
// // //     }
// // //       console.log(pattern);
// // //   }
// // // }

  
// // // printStarPattern(11);

function printUnion( arr1,  arr2,  m,  n)
    {
        let i = 0, j = 0;
        while (i < m && j < n) {
            if (arr1[i] < arr2[j])
                document.write(arr1[i++] + " ");
            else if (arr2[j] < arr1[i])
                document.write(arr2[j++] + " ");
            else {
                document.write(arr2[j++] + " ");
                i++;
            }
        }
 
        while (i < m)
            document.write(arr1[i++] + " ");
        while (j < n)
            document.write(arr2[j++] + " ");
 
        return 0;
    }
 
        var arr1 = [ 1, 2, 4, 5, 6 ];
        var arr2 = [ 2, 3, 5, 7 ];
        var m = arr1.length;
        var n = arr2.length;
        printUnion(arr1, arr2, m, n);


// 1
// 12
// 123
// 1234
// 12345



// function Pattern(rows) 
// {
//     let string = ""; 
//         for (let i = 1; i <= rows;i++) 
//     {
//         for (let j = i; j <= i; j++) 
//             {
//                 string += j;
                
//             }
//             string += "\n";  
//     }
//     console.log(string);
//     }

  
// Pattern(5);
