//taklif 1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
console.log(myFriends.slice(false, num)); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];


//talkif 2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.pop();
friends.shift()
console.log(friends); // ["Eman", "Osama"]


//taklif 3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [arrTwo.pop(), arrOne.pop(),arrOne.reverse().concat(arrTwo), arrTwo.shift()];

// Write One Single Line Of Code

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]


//taklif 4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
let x = words.pop()[0]
console.log(x.slice(-true-true-true-true).toUpperCase()); // ZERO


//taklif 5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
//first solution: 
if(haystack.includes(needle)){
    console.log("found");
}
//second solution:
for(let x = 0;x<haystack.length;x++){
    let z = haystack[x];
    if (z == needle) console.log("found");
}
//third solution:
for(let i = 0; i<haystack.length;i++){
    if(i==haystack.indexOf(needle)){
        console.log("found");
    }
}


//taklif 6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs= allArrs.concat(arr1.pop(), arr2.pop(), arr2.pop()).sort();
console.log(allArrs.join("").toLowerCase()); // fxy