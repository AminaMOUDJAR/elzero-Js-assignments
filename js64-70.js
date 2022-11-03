//taklif 1
function getDetails(zName, zAge, zCountry) {
    function namePattern(zName) {
      let names = zName.split(" ");
      return `${names[0]} ${names[1][0].toUpperCase()}.`
    }
    function ageWithMessage(zAge) {
      return parseInt(zAge)
    }
    function countryTwoLetters(zCountry) {
      return zCountry.slice(0, 2).toUpperCase()
    }
    function fullDetails() {
      return `Hello ${namePattern(zName)}, Your Age Is ${ageWithMessage(
        zAge
      )}, You Live In ${countryTwoLetters(zCountry)}`
    }
    return fullDetails(); // Do Not Edit This
  }
  
  console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
  console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));

  //taklif 2
  let itsMe = () => `Iam A Normal Function`;
console.log(itsMe());
let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`
console.log(urlCreate("https", "elzero", "org"))


//taklif 3
let checker = (zName) => (status) => (salary) =>
  status === "Available"
    ? `${zName}, My Salary Is ${salary}`
    : `Iam Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); 
console.log(checker("Ahmed")("Not Available")()); 

//taklif 4
function specialMix(...data) {
    let result = 0;
    for (let i = 0; i < data.length; i++) {
      result += parseInt(data[i]) || 0;
    }
    return result === 0 ? "All Is Strings" : result;
  }
  
  console.log(specialMix(10, 20, 30));
  console.log(specialMix("10Test", "Testing", "20Cool"));
  console.log(specialMix("Testing", "10Testing", "40Cool"));
  console.log(specialMix("Test", "Cool", "Test"));