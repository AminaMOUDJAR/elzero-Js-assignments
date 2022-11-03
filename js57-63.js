//taklif 1
function sayHello(theName, theGender ) {
    switch (theGender) {
      case "Male":
        console.log("Hello Mr ${theName}")
        break
      case "Female":
        console.log("Hello Mrs ${theName}")
        break
      default:
        console.log("Hello ${theName}")
    }
  }
  sayHello("Osama", "Male")
  sayHello("Eman", "Female")
  sayHello("Sameh")

//taklif 2
function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined) return console.log("Second Number Not Found")
    if (operation === undefined) return console.log(firstNum+secondNum)
    switch (operation) {
      case "add":
      default:
        console.log(firstNum + secondNum)
        break
      case "subtract":
        console.log(firstNum - secondNum)
        break
      case "multiply":
        console.log(firstNum * secondNum)
        break
    }
  }
  
  calculate(20)
  calculate(20, 30)
  calculate(20, 30, "add")
  calculate(20, 30, "subtract")
  calculate(20, 30, "multiply")


  // taklif 3
  function ageInTime(theAge) {
    if (theAge > 100 || theAge < 10) return console.log("Age out of range")
    console.log(
      "Your age is "+theAge+ "Years or"+ theAge* 12 +"Months or" +
        theAge * 12 * 4.34524
       +"Weeks or" +theAge * 365 +"Days or "+theAge * 8760 +"Hours or"+ 
        theAge * 525600
       +"Minutes or"+ theAge * 3.154e7 +"Seconds"
    )
  }
  
  ageInTime(110)
  ageInTime(38)

  //taklif 4
  function checkStatus(a, b, c) {
    let arr = [a, b, c]
    for (let i = 0; i < arr.length ;i++) {
      typeof arr[i] === "string"
        ? (a = arr[i])
        : typeof arr[i] === "number"
        ? (b = arr[i])
        : typeof arr[i] == "boolean"
        ? (c = "You Are Available For Hire")
        : (c = "You Are Available For Hire")
    }
    console.log("Hello ${a}, Your Age Is ${b}, ${c}")
  }
  
  checkStatus("Osama", 38, true)
  checkStatus(38, "Osama", true)
  checkStatus(true, 38, "Osama")
  checkStatus(false, "Osama", 38)

  //taklif 5
  function createSelectBox(startYear, endYear) {
    document.write(`<select>`)
    for (let i = startYear; i <= endYear; i++) {
      document.write(`<option value="${i}">${i}</option>`)
    }
    document.write(`</select>`)
  }
  createSelectBox(2000, 2021)

  //taklif 6
  function multiply(...numbers) {
    let result = 1
    for (let i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] !== "number") continue
      result *= parseInt(numbers[i])
    }
    console.log(result)
  }
  
  multiply(10, 20)
  multiply("A", 10, 30)
  multiply(100.5, 10, "B")
