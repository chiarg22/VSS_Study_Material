let k=11; 
let y=" ";
let result = "";

    for (let i = 1; i <= 11; i++) {

      for (let j = i; j <= k; j++) {
        result += "*";
      } 
      result = result + "\n";
      for(let x=1; x<=i;x++)
      {
        result=result+y;
      }
            k=k-1;
    }   
    console.log(result);

      *
     * *
    * * *
   * * * *
  * * * * *
 * * * * * *
* * * * * * *

// for (let i = 1; i <= 11; i++) {

//     for (let j = i; j <= k; j++) {
//       result += "*";
//     } 
//     result = result + "\n";
//     for(let x=1; x<=i;x++)
//     {
//       result=result+y;
//     }
//           k=k-1;
//   }   
//   console.log(result);
