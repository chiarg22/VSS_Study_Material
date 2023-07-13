// function star(s) 
// { let result = "";

//     for (let i = 1; i <= s; i++) {

//       for (let j = 1; j <= s; j++) {
//         result += "*";
//       }
//       result += "\n"; 

//     }
//     console.log(result);
//   }
  
//   star(4);


//   let k=0;
//   function star(s) 
// { let k=s;
//   let result = "";

//     for (let i = 1; i <= s; ++i) {

//       for (let j = i; j <= k; j++) {
//         result += "*";
//       }
//       result += "\n"; 
//       k=k-1;
//     }
//     console.log(result);
//   }
  
//   star(5);

  
// let k=10;
//   let result = " ";

//     for (let i = 1; i <= 10; i++) {

//       for (let j = i; j <= k; j++) {
//         result += "*";
//       }
//       result = result + "\n";
//       result= result + result.repeat(j);
//       k=k-1;
//     }   
//     console.log(result);

// let k=10; 
// let y=" ";
// let result = "";

//     for (let i = 1; i <= 10; i++) {

//       for (let j = i; j <= k; j++) {
//         result += "*";
//       } 
//       result = result + "\n";
//       for(let x=1; x<=i;x++)
//       {
//         result=result+" ";
//       }
//             k=k-1;
//     }   
//     console.log(result);

let k=10; 
let y=" ";
let result = "";

    for (let i = 1; i < 10; i++) {

      for (let j = i; j < k; j++) {
        result += "*";
      } 
      result = result + "\n";
      for(let x=1; x<=i;x++)
      {
        result=result+ y;
      }
            k=k-1;
    }   
    console.log(result);




    * * * * * * * * * 
     * * * * * * * 
      * * * * * 
        * * * 
          * 
  
 
// let multi = 3;
// let str = "Mary had a little lamb";

// console.log(str.repeat(multi));
// "Mary had a little lambMary had a little lambMary had a little lamb"