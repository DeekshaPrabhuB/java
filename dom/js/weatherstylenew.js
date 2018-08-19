//author:Deeksha
//this is the function for display the days and prticular information about that day
function loadDoc() {
  var d = new Date();
  var hours;
  hours = d.getHours();
  var msg;
 
   msg=document.getElementById('textOnImg');
   
   if(hours<12){
     msg.innerHTML="Good morning";
   }
   else if(hours<16){
    msg.innerHTML="Good Afternoon";
   }
   else if(hour>12&&hour<16)
   { 
     msg.innerHTML="Good night";
  }   
 
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var a=JSON.parse(this.responseText);
        var dayvalue=a.query.results.channel.item.forecast[0].day;
       
        switch(dayvalue){
            case 'Mon': document.getElementById("demo").innerHTML="MONDAY";//demo is the id for display the first day
                        document.getElementById("day2").innerHTML="TUESDAY";//day2 is the id for display the second id
                        document.getElementById("day3").innerHTML="WEDNESDAY";//day3 is the id for display the second id
                        document.getElementById("day4").innerHTML="THRUSDAY";//day4 is the id for display the second id
                        document.getElementById("day5").innerHTML="FRIDAY";//day5 is the id for display the second id
                        document.getElementById("day6").innerHTML="SATURDAY";//day6 is the id for display the second id
                        document.getElementById("day7").innerHTML="SUNDAY";//day7 is the id for display the second id
           
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

         
        document.getElementById("temp1").innerHTML=(((a.query.results.channel.item.forecast[0].high)-32)/1.8).toFixed(0)+'&deg';//temp1 is the temparature high
        document.getElementById("temp2").innerHTML=(((a.query.results.channel.item.forecast[0].low)-32)/1.8).toFixed(0)+'&deg';//temp2 is the temparature low

        document.getElementById("temp3").innerHTML=(((a.query.results.channel.item.forecast[1].high)-32)/1.8).toFixed(0)+'&deg';
        document.getElementById("temp4").innerHTML=(((a.query.results.channel.item.forecast[1].low)-32)/1.8).toFixed(0)+'&deg';

        document.getElementById("temp5").innerHTML=(((a.query.results.channel.item.forecast[2].high)-32)/1.8).toFixed(0)+'&deg';
        document.getElementById("temp6").innerHTML=(((a.query.results.channel.item.forecast[2].low)-32)/1.8).toFixed(0)+'&deg';

        document.getElementById("temp7").innerHTML=(((a.query.results.channel.item.forecast[3].high)-32)/1.8).toFixed(0)+'&deg';
        document.getElementById("temp8").innerHTML=(((a.query.results.channel.item.forecast[3].low)-32)/1.8).toFixed(0)+'&deg';

        document.getElementById("temp9").innerHTML=(((a.query.results.channel.item.forecast[4].high)-32)/1.8).toFixed(0)+'&deg';
        document.getElementById("temp10").innerHTML=(((a.query.results.channel.item.forecast[4].low)-32)/1.8).toFixed(0)+'&deg';

        document.getElementById("temp11").innerHTML=(((a.query.results.channel.item.forecast[5].high)-32)/1.8).toFixed(0)+'&deg';
        document.getElementById("temp12").innerHTML=(((a.query.results.channel.item.forecast[5].low)-32)/1.8).toFixed(0)+'&deg';

        document.getElementById("temp13").innerHTML=(((a.query.results.channel.item.forecast[6].high)-32)/1.8).toFixed(0)+'&deg';
        document.getElementById("temp14").innerHTML=(((a.query.results.channel.item.forecast[6].low)-32)/1.8).toFixed(0)+'&deg';
        
        var arr=['home1st','home','home3rd','home4th','home5th','home6th','home7'];//array is to store id of the image
        for(let i=0;i<7;i++){
          var textvalue=a.query.results.channel.item.forecast[i].text;
          
          if(textvalue=="Scattered Showers")
          {
            var imglogo=document.getElementById(arr[i]);
            imglogo.style.background="url('images/weather-icons_20180813_090711714.jpg')95% 95%";
          }
          if(textvalue=="Partly Cloudy")
          {
            var imglogo=document.getElementById(arr[i]);
            imglogo.style.background="url('images/weather-icons_20180813_090711714.jpg')185% 10%";
          }
          if(textvalue=="Rain")
          {
            var imglogo=document.getElementById(arr[i]);
            imglogo.style.background="url('images/weather-icons_20180813_090711714.jpg')5% 90%";
          }
          if(textvalue=="Scattered Thunderstorms")
          {
            var imglogo=document.getElementById(arr[i]);
          imglogo.style.background="url('images/weather-icons_20180813_090711714.jpg')65% 95%";

          }
           if(textvalue=="Breezy")
          {
              var imglogo=document.getElementById(arr[i]);
              console.log(arr[i])
              imglogo.style.background="url('images/weather-icons_20180813_090711714.jpg')65% 50%";
          }
          if(textvalue=="Mostly Cloudy")
          {
            var imglogo=document.getElementById(arr[i]);
            console.log(imglogo)
            imglogo.style.background="url('images/weather-icons_20180813_090711714.jpg')40% 5%";
          }
          if(textvalue=="Cloudy")
          {
            var imglogo=document.getElementById(arr[i]);
            console.log(imglogo)
            imglogo.style.background="url('images/weather-icons_20180813_090711714.jpg')215% 10%";
          }
          if(textvalue=="Sunny")
          {
            var imglogo=document.getElementById(arr[i]);
            console.log(imglogo)
            imglogo.style.background="url('images/weather-icons_20180813_090711714.jpg')7% 5%";
          }
          if(textvalue=="Mostly Sunny"){
            var imglogo=document.getElementById(arr[i]);
            console.log(imglogo)
            imglogo.style.background="url('images/weather-icons_20180813_090711714.jpg')7% 5%";

          }
        }



        
      }
    };
    var location=document.getElementById('textOnImg1').value;
    xhttp.open("GET", "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22"+location+"%2C%20in%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", true);
    xhttp.send();
 






var leftsideday=document.getElementsByClassName("weatherBackground");
leftsideday[0].style.backgroundColor="blue";
leftsideday[0].style.height="450px";
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


  }