

var today = new Date();

var daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var monthsOfTheYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var thisDay = daysOfTheWeek[today.getDay()];
var thisMonth = monthsOfTheYear[today.getMonth()];
var thisDate = today.getDate();

switch (thisDay) {
  case "Sunday":
    document.body.style.background = "#d4f3ef";
    break;
  case "Monday":
    document.body.style.background = "#fde2e2";
    break;
  case "Tuesday":
    document.body.style.background = "#dcd6f7";
    break;
  case "Wednesday":
    document.body.style.background = "#fbdff0";
    break;
  case "Thursday":
    document.body.style.background = "#e9e4e6";
    break;
  case "Friday":
    document.body.style.background = "#d6e5fa";
    break;
  case "Saturday":
    document.body.style.background = "#d3f4ff";
    break;
  default:
    document.body.style.background = "#f3f9fb";
    console.log("Error: current day is equal to " +thisDay);
}
