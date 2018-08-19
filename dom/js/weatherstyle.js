//author:Deeksha
//this is the function for display the days and prticular information about that day
function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var a=JSON.parse(this.responseText);
        var dayvalue=a.query.results.channel.item.forecast[0].day;
       
        switch(dayvalue){
            case 'Mon': document.getElementById("demo").innerHTML="MONDAY";
                        document.getElementById("day2").innerHTML="TUESDAY";
                        document.getElementById("day3").innerHTML="WEDNESDAY";
                        document.getElementById("day4").innerHTML="THRUSDAY";
                        document.getElementById("day5").innerHTML="FRIDAY";
                        document.getElementById("day6").innerHTML="SATURDAY";
                        document.getElementById("day7").innerHTML="SUNDAY";
           
                        break;
            case 'Tue': document.getElementById("demo").innerHTML="TUESDAY";
                        document.getElementById("day2").innerHTML="WEDNESDAY";
                        document.getElementById("day3").innerHTML="THRUSDAY";
                        document.getElementById("day4").innerHTML="FRIDAY";
                        document.getElementById("day5").innerHTML="SATURDAY";
                        document.getElementById("day6").innerHTML="SUNDAY";
                        document.getElementById("day7").innerHTML="MONDAY";
                        break;
            case 'Wed': document.getElementById("demo").innerHTML="WEDNESDAY";
                        document.getElementById("day2").innerHTML="THRUSDAY";
                        document.getElementById("day3").innerHTML="FRIDAY";
                        document.getElementById("day4").innerHTML="SATURDAY";
                        document.getElementById("day5").innerHTML="SUNDAY";
                        document.getElementById("day6").innerHTML="MONDAY";
                        document.getElementById("day7").innerHTML="TUESDAY";
                        break;
            case 'Thu': document.getElementById("demo").innerHTML="THRUSDAY";
                        document.getElementById("day2").innerHTML="FRIDAY";
                        document.getElementById("day3").innerHTML="SATURDAY";
                        document.getElementById("day4").innerHTML="SUNDAY";
                        document.getElementById("day5").innerHTML="MONDAY";
                        document.getElementById("day6").innerHTML="TUESDAY";
                        document.getElementById("day7").innerHTML="WEDNESDAY";
                        //document.getElementById("day7").innerHTML="TUESDAY";
                        break;
            case 'Fri': document.getElementById("demo").innerHTML="FRIDAY";
                        document.getElementById("day2").innerHTML="SATURDAY";
                        document.getElementById("day3").innerHTML="SUNDAY";
                        document.getElementById("day4").innerHTML="MONDAY";
                        document.getElementById("day5").innerHTML="TUESDAY";
                        document.getElementById("day6").innerHTML="WEDNESDAY";
                        document.getElementById("day7").innerHTML="THRUSDAY";
                        //document.getElementById("day7").innerHTML="TUESDAY";
                        break;
            case 'Sat': document.getElementById("demo").innerHTML="SATURDAY";
                        document.getElementById("day2").innerHTML="SUNDAY";
                        document.getElementById("day3").innerHTML="MONDAY";
                        document.getElementById("day4").innerHTML="TUESDAY";
                        document.getElementById("day5").innerHTML="WEDNESDAY";
                        document.getElementById("day6").innerHTML="THRUSDAY";
                        document.getElementById("day7").innerHTML="FRIDAY";
                        break;
            case 'Sun': document.getElementById("demo").innerHTML="SUNDAY";
                        document.getElementById("day2").innerHTML="MONDAY";
                        document.getElementById("day3").innerHTML="TUESDAY";
                        document.getElementById("day4").innerHTML="WEDNESDAY";
                        document.getElementById("day5").innerHTML="THRUSDAY";
                        document.getElementById("day6").innerHTML="FRIDAY";
                        document.getElementById("day7").innerHTML="SATURDAY";
                        break;
        }

         
        document.getElementById("temp1").innerHTML=(((a.query.results.channel.item.forecast[0].high)-32)/1.8).toFixed(0);
        document.getElementById("temp2").innerHTML=(((a.query.results.channel.item.forecast[0].low)-32)/1.8).toFixed(0);

        document.getElementById("temp3").innerHTML=(((a.query.results.channel.item.forecast[1].high)-32)/1.8).toFixed(0);
        document.getElementById("temp4").innerHTML=(((a.query.results.channel.item.forecast[1].low)-32)/1.8).toFixed(0);

        document.getElementById("temp5").innerHTML=(((a.query.results.channel.item.forecast[2].high)-32)/1.8).toFixed(0);
        document.getElementById("temp6").innerHTML=(((a.query.results.channel.item.forecast[2].low)-32)/1.8).toFixed(0);

        document.getElementById("temp7").innerHTML=(((a.query.results.channel.item.forecast[3].high)-32)/1.8).toFixed(0);
        document.getElementById("temp8").innerHTML=(((a.query.results.channel.item.forecast[3].low)-32)/1.8).toFixed(0);

        document.getElementById("temp9").innerHTML=(((a.query.results.channel.item.forecast[4].high)-32)/1.8).toFixed(0);
        document.getElementById("temp10").innerHTML=(((a.query.results.channel.item.forecast[4].low)-32)/1.8).toFixed(0);

        document.getElementById("temp11").innerHTML=(((a.query.results.channel.item.forecast[5].high)-32)/1.8).toFixed(0);
        document.getElementById("temp12").innerHTML=(((a.query.results.channel.item.forecast[5].low)-32)/1.8).toFixed(0);

        document.getElementById("temp13").innerHTML=(((a.query.results.channel.item.forecast[6].high)-32)/1.8).toFixed(0);
        document.getElementById("temp14").innerHTML=(((a.query.results.channel.item.forecast[6].low)-32)/1.8).toFixed(0);
        
        var textvalue=a.query.results.channel.item.forecast[0].text;
console.log(textvalue);
        switch(textvalue){
           case 'Scattered Showers':
                                  var logostyle=document.getElementsByClassName('imagestyle123');
                                  logostyle[0].classList.add("imgclipstyle");
                    
                                  
                                  //logostyle[1].style.position="absolute";
                                  //logostyle[1].style.top="-0px";

                                  //logostyle[1].style.right="-60px";
                                  //logostyle[1].style.clip="rect(0px, 20px, 30px, 2px)";
            break;
             case 'Breezy'  :
             var logostyle=document.getElementsByTagName('img');
             logostyle[0].style.position="absolute";
             logostyle[0].style.top="-200px";

             logostyle[0].style.right="-80px";
             logostyle[0].style.clip="rect(190px, 200px, 300px, 100px)";
             break; 
   
       }
       
        
      }
    };
    xhttp.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22bangalore%2C%20in%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", true);
    xhttp.send();
  }




// var firstele=document.getElementsByClassName("first");

// firstele[0].style.height="100px";
// firstele[0].style.color="blue";
// leftsideday[0].style.fontSize="0px";
// leftsideday[0].style.fontWeight="700";


var leftsideday=document.getElementsByClassName("weatherBackground");
leftsideday[0].style.backgroundColor="blue";
leftsideday[0].style.height="500px";
leftsideday[0].style.color="white";
leftsideday[0].style.fontSize="40px";
leftsideday[0].style.fontWeight="700";
leftsideday[0].style.textAlign="center";


var leftsideday1=document.getElementsByClassName("weatherBackground1");

leftsideday1[0].style.height="100px";
leftsideday1[0].style.color="white";
leftsideday1[0].style.fontSize="40px";
leftsideday1[0].style.fontWeight="700";
leftsideday1[0].style.textAlign="center";


var bottompart=document.getElementsByClassName("first");
bottompart[0].style.color="blue";
bottompart[0].style.fontSize="20px";
bottompart[0].style.textAlign="center";


var logostyle123=document.getElementsByClassName("logoheight");
 logostyle123[0].style.height="100px";

 var logostyle123=document.getElementsByClassName("logoheight1");
 logostyle123[0].style.height="70px";imagestyle2nd


