const arr = [1, 2, 3, 4, 5];

// Add new element to the top
arr.push(10);
arr.push(11);
arr.push(12);
arr.push(13);

console.log("After Push", arr); //[1,2,3,4,5,10,11,12,13]

// Remove the element form the top
arr.pop(); // You don't need to pass an argument
arr.pop(2); // Nothing is gonna happen with argument

console.log("After Pop", arr); //[1,2,3,4,5,10,11]

// let a=[1,2,3,4];
//     a[2]=a.push(5);
//     console.log(a);

    let a=[1,2,3,4];
    a[2]=a.push(50);
    console.log(a);

//     let len = a.push(50);
// console.loh(a); => gives length of a = 5
// a[2] is assigned as 5 [length of array a]

let a=[1,2,3,4];
    a.pop(2)=a.push(50);
    console.log(a);