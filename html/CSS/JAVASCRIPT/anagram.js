// intialie an array
// take leng of array
//convert the second string to lowercase
//comp thel leng
// run the loops till n
// apply condition arr1[i] == arr2[j] and take a var k=0 and do k++ everytime the condition is true
// if k === arr1.length it is anagram otherwise not

arr3 = "yash";
arr4 = "ashy";
let k = 0;
arr3 = arr3.toLowerCase();
arr4 = arr4.toLowerCase();

function anagram(arr1, arr2) {
  if (arr1.length == arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
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
  }
}
anagram(arr3, arr4);

//2nd approach using splice
const checkAnagram = (str1, str2) => {
  const arr1 = str1.split("");
  const arr2 = str2.split("");

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr2.splice(j, 1);
        console.log("Splice: ", arr2);
        break;
      }
    }
  }

  console.log({ str1, str2 });
  return arr2.length > 0 ? false : true;
};

console.log(checkAnagram("carrace", "racecar"));

//3rd approach

function anagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const arr1 = str1.split("");
  const arr2 = str2.split("");
  for (let i = 0; i < arr1.length; i++) {
    const index = arr2.indexOf(arr1[i]);
    if (index !== -1) {
      arr2[index] = 0;
    } else {
      return false;
    }
  }
  return arr2.every((char) => char === 0);
}
