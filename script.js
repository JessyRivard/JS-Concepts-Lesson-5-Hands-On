let today = new Date();
let Month = today.getMonth();
let day = today.getDate();
let year = today.getFullYear();
let printDate = Month +"/" + day + "/" + year;
document.getElementById("today").innerHTML = "Today is: " + printDate;