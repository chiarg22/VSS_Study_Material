/**
 * @description {Method to print a loop upto a specific number}
 * @param {*} num
 */
function printLoop(num) {
    console.log(num);
    for (let i = num; i >= 0; i--) {
        if(i%3==0)
      console.log("i: ", i);
    }
  }
  
  //printLoop(10);
  printLoop();
  