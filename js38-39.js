let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day= day.trim()
day= day.charAt(0).toUpperCase()+day.slice(1,day.length)
console.log(day)//Friday
// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"
if(day=="Friday"){console.log("true")}else{console.log("false")}
switch (day){
    case "Friday":
    case "Saturday":
    case "Sunday":
        console.log("No appointments available")
        break   
    case "Monday":
    case "Thursday":
        console.log("From 10:00AM to 5:00PM")
        break
    case "Tuesday":
        console.log("From 10:00AM to 6:00PM") 
        break
    case "Wednesday":
        console.log("From 10:00AM to 7:00PM")
    default:
        console.log("Its not a valid day")              
}
//output : No appointments available
