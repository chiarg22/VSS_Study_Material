// let k=11; 
// let y=" ";
// let result = "";

//     for (let i = 1; i <= 11; i++) {

//       for (let j = i; j <= k; j++) {
//         result += "*";
//       } 
//       result = result + "\n";
//       for(let x=1; x<=i;x++)
//       {
//         result=result+y;
//       }
//             k=k-1;
//     }   
//     console.log(result);

    let y=" ";
    let k=1;
let result = "";

    for (let i = 1; i <= 5; i++) {

      for (let j = 1; j <= 11; j++) {
        for(k=1;k<=5;k++)   
    {
        result += `${j-k}${k}${j+k}`;;
      }
      } 
      result = result + "\n";
    }   
    console.log(result);

