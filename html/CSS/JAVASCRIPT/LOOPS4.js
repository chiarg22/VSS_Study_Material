// let string = "";    
// for(let i=1;i<=5;i++)
// {
//     for(let j=i;j<=k;j++)
//     {
//         string += i;
        
//     }
//     string += "\n"; 
// }


// console.log(string);

function pattern(rows)
{
let string = "";    
for(let i=1;i<=rows;i++)
{
    for(let j=1;j<=i;j++)
    {
        string += i;
        
    }
    string += "\n"; 
}


console.log(string);
}

pattern(4);

// 

// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }

// console.log();
 
//  let a=10;
//  let b="10";

//  //b="yash";
//  c="Navneet";
//  e=b+c;
//  d=a*b;
 
// console.log(d);
// console.log(typeof (d));
// // console.log(d);



// 1-what would be the 1st var
// last-10
// 1-10
// i++
// i<10
// console.log(i);

// let i=1;  

// for(let i=1;i<=10;i++)
// {
//     console.log(i);
// }

// for (let i = 10; i >= 0; i=i-2) {
 
//     console.log(i);
  
// }





function star(s) {
    for (let i = 1; i <= s; i++) {
      let result = "";
  
      for (let j = 1; j <= s; j++) {
        result += "*";
      }
      string += "\n"; 

    }
    console.log(result);
  }
  
  star(4);