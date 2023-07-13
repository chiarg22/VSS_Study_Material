function number(num)
  {
    if(num<1 || num=== null || typeof num!== "string")
{
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
  console.log(number("10"));