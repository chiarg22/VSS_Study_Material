let k=0;
function printStarPattern(rows) {
    k=rows-1;
    for (let i = 1; i <= rows;i++) {
      let pattern = '';
      if (i%2==0)
      {
        for (let j = k; j >=i ; j--) {
        pattern += j;
        
      } 
    }
      else
      {
        for (let j = i; j <= k; j++) {
          pattern += j;

    }
  }
    k=k-1;
      console.log(pattern);
  }
}

  
printStarPattern(10);



// let k=0;
// function printStarPattern(rows) {
//     k=rows-1;
//     for (let i = 1; i <= rows;i++) {
//       let pattern = '';
//       for (let j = i; j <= k; j++) {
//         pattern += j;
//       } 
//       if(i%2==0)
//       {
//         for (let j = k; j >= 1; j--) {
//           let pattern = '';
//           pattern += j;
//     }
//       k=k-1;
//     }
//       console.log(pattern);
//   }
// }

  
// printStarPattern(11);
// let k=0;
// function printStarPattern(rows) {
//     k=rows-1;
//     for (let i = 1; i <= rows;i++) {
//       let pattern = '';
//       for (let j = i; j <= k; j++) {
//         pattern += j;
//       } 
//       i=i+1;
//       if(i%2==0)
//       {
//         for (let j = k; j >= 1; j--) {
//           let pattern = '';
//           pattern += j;
//     }
//       k=k-1;
//     }
//       console.log(pattern);
//   }
// }

  
// printStarPattern(11);



// let k=0;
// let pattern = '';
// let i = 1;
// function printStarPattern(rows) {
//     k=rows-1;
//     for (i = 1; i <= rows; i++)
//     {
  
//     if (i%2!=0)
//        {
//       for (let j = i; j <= k; j++) {
//         pattern += j;
//       } 
//     }
//       else
//       {
//         for (let j = k; j >= 1; j--) {
//           let pattern = '';
//           pattern += j;
//     }
//     }
//     k=k-1;
//   }
//       console.log(pattern);
//   }


  
// printStarPattern(11);




// for (let i = rows; i >= 1; i--){
          // }
// 1 2 3 4 5 6 7 8 9 10

// 9 8 7 6 5 4 3 2

// 3 4 5 6 7 8

// 7 6 5 4

// 4 5 6

// 5

// function printPattern() {
//     var rows = 5;
//     var count = 1;
  
//     for (var i = rows; i >= 1; i--) {
//       var pattern = "";
      
//       for (var j = count; j <= 2 * i - 1 + count; j++) {
//         pattern += j + " ";
//       }
  
//       console.log(pattern);
//       count++;
//     }
//   }
  
//   printPattern();