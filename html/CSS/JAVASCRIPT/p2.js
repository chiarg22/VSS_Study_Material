arr3 = "yash";
arr4 = "yaaaash";
let k = 0;
arr3 = arr3.toLowerCase();
arr4 = arr4.toLowerCase();

function anagram(arr1, arr2) {
  if (arr1.length == arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          k++;
          break;
        }
      }
    }
    console.log(k);
    if (k === arr1.length) {
      console.log("Anagram");
    } else {
      console.log("Not an Anagram");
    }
  } else {
    console.log("Haa Haa nhi hai Anagram");
  }
}
anagram(arr3, arr4);
