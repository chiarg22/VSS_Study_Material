arr=[1,2,3,4,1,2,3,4,5,6,7,8,1,2];

function count(arr) {
    let newbie=[new Set(arr)];
    for (let i = 0; i < arr.length; i++) {
      let x = 0;
      for (let j = 0; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          x++;
        }
      }
      console.log(newbie[i],":",x);
    //   console.log(x);

    }
  }
  
  count(arr);