
let y=" ";
let k=1;
let result = "";

for (let i = 1; i <= 5; i++) {

  for (let j = 1; j <= 11; j++)
   {
    for(k=1;k<=5;k++)   
    {
    result += `${i}{j-k}${i}{k}${i}{j+k}`;
    }
  } 
  result = result + "\n";
}   
console.log(result);