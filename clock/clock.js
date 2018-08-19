var d = new Date();
var date = d.getHours();
var minute = d.getMinutes();
var seconds = d.getSeconds();
var ref1 = document.getElementsByClassName("seconds_hand")[0];
var ref2 = document.getElementsByClassName("minute_hand")[0];
var ref3 = document.getElementsByClassName("hour_hand")[0];

function clock() {

console.log(ref1);
console.log(ref2);
console.log(ref3);

if (date > 12){
   date = date - 12;
}
date=180+date*30;

ref3.style.transform = "rotate(" + date + "deg)";

minute=180+minute*6;

ref2.style.transform = "rotate(" + minute + "deg)";

seconds=seconds*6;


ref1.style.transform = "rotate(" + seconds+ "deg)";
   setInterval(second_hand, 1000);
   setInterval(hour_hand, 3600000);
   setInterval(minute_hand, 60000);
}


function second_hand() {
   seconds+= 6;
   ref1.style.transform = "rotate(" + seconds + "deg)";
   ref1.style.transformOrigin = "top left";
}


function minute_hand() {
   minute+= 30;
   ref2.style.transform = "rotate(" + minute + "deg)";
   ref2.style.transformOrigin = "top left";
}

function hour_hand() {
   date+= 6;
   ref3.style.transform = "rotate(" + date+ "deg)";
   ref3.style.transitionOrigin = "top left";
}