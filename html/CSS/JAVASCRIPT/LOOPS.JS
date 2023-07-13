// Basic Structure of loop
/**
 * 1- Starting condition
 * 2- Terminating condition
 * 3 - Incremental/Decremental Condition
 */

// Basic for loop + -> Where we need index
// for (let i = 0; i <= 10; i++) {
//     console.log("I: ", i);
//   }
  
//   // Basic reverse loop
//   for (let i = 10; i >= 0; i--) {
//     console.log("I-: ", i);
//   }

  function number(num)
  {
    //  let flag=0;

    if(num<1 || num=== null || typeof num!== "string")
{
//     flag+=1;

//     if(flag==1)
// {
    let x= Number(num);
for (let i = 1; i <= x; i++) {
    console.log("I: ", i);
  }
}
  else if(num>1)
  {
    for (let i = 1; i <= num; i++) {
    console.log("I: ", i);
  }
}
else
  {
    return("Please enter a valid entry");
  }
}
  console.log(number("a"));

//   function number2(num2)
//   {
//     if(num2=== null || typeof num2=== "string")
//   return("Please enter a valid entry");
//   else
//   {
//     for (let i = num2; i >= 1; i--) {
//     console.log("I: ", i);
//   }
// }
//   } 

//   console.log(number2("abc"));
  
