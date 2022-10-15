//taklif 1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(10**5); // 100000
console.log((10**2)*(10**3)); // 100000
console.log((10**4)*(10)); // 100000
console.log((10**10)/(10**5)); // 100000
console.log(100_000); // 100000
console.log(1*(10**5)); // 100000
console.log(10*(10**4)); // 100000
console.log(10e4); // 100000
console.log(100000); // 100000
console.log(100000..toString()); // 100000
console.log(100000.00005.toFixed(0)); // 100000
console.log(Number("100000")); // 100000


// //taklif 2
console.log(-1*Number.MIN_SAFE_INTEGER); // 9007199254740991

//talkif 3
console.log(Number.MAX_SAFE_INTEGER.toString().length); // 16 (not my solution)

//taklif 4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57

//taklif 5
let num = 10;

console.log(Number.isInteger(num)+Number.isInteger(num)); // 2

//taklif 6
let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(parseFloat(flt).toFixed(0)); // 10
console.log(flt.toFixed(0)); // 10
console.log(Math.round(flt)); // 10
console.log(Math.ceil(flt)-true); // 10

//taklif 7
console.log(Math.random(0,4)); // 0 || 1 || 2 || 3 || 4
//0.5071228202163158