let a = 10;
let b = 10.1;
let c = "10";

// == -> Checks for data only
console.log("Double = check", a == b, typeof a, typeof b);
console.log("Double = check v2", a == c, typeof a, typeof c);

// === -> Checks for data + Data type
console.log("Tripple = check", a === b, typeof a, typeof b);
console.log("Tripple = check v2", a === c, typeof a, typeof c);
//Using typeof to check the datatype
console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));