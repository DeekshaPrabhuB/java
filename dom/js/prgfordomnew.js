

var x = document.getElementsByTagName("body");
x[0].style.backgroundColor="gray";


var x2 = document.getElementById("sectionstyle");
var x3 =document.createElement("DIV");

x3.style.height="5px";
x3.style.backgroundColor="#66ff99";
x3.style.marginTop="10px";
x3.style.marginRight="10px";
x3.style.marginLeft="10px";
x2.appendChild(x3);


var header=document.createElement("DIV");
header.classList.add("headerstyle");
//span for logo
var logo=document.createElement("span");
logo.classList.add("logostyle");
var logotxt=document.createTextNode("The Modernist");
logo.appendChild(logotxt);
header.appendChild(logo);
//p for freepsd
var freepsd=document.createElement("p");
freepsd.classList.add("freepsdstyle");
var freepsdtxt=document.createTextNode("Free PSD Website template");
freepsd.appendChild(freepsdtxt);
header.appendChild(freepsd);

//ul li

var list=document.createElement("ul");
list.classList.add("listvaluestyle1");
var listvalue=document.createElement("li");
listvalue.classList.add("listvaluestyle");
listvalue.innerHTML="Home";
list.appendChild(listvalue);
header.appendChild(list);

var listvalue2=document.createElement("li");
listvalue2.classList.add("listvaluestyle");
listvalue2.innerHTML="styledemo";
list.appendChild(listvalue2);
header.appendChild(list);

var listvalue3=document.createElement("li");
listvalue3.classList.add("listvaluestyle");
listvalue3.innerHTML="fullwidth";
list.appendChild(listvalue3);
header.appendChild(list);

var listvalue4=document.createElement("li");
listvalue4.classList.add("listvaluestyle");
listvalue4.innerHTML="dropdown";
list.appendChild(listvalue4);
header.appendChild(list);

var listvalue5=document.createElement("li");
listvalue5.classList.add("listvaluestyle");
listvalue5.innerHTML="protfil";
list.appendChild(listvalue5);
header.appendChild(list);

var listvalue6=document.createElement("li");
listvalue6.classList.add("listvaluestyle");
listvalue6.innerHTML="gallary";
list.appendChild(listvalue6);
header.appendChild(list);

x2.appendChild(header);



//next div for content


var contentdiv=document.createElement("DIV");
contentdiv.classList.add("contentdivstyle");

var contentdivtxt=document.createElement("h1");
contentdivtxt.innerHTML="Cursus pentai Saccum nuclea";
contentdivtxt.classList.add("contentdivtextstyle");
contentdiv.appendChild(contentdivtxt);



var contentdivtxt1=document.createElement("p");
contentdivtxt1.innerHTML="Nullamlacus dui ipsum conseque loborttis non euisquemorbi penas dapibulum orna.Urnaultries quisvurabiur phasellentesque congue magnis vestibulumquismodo nulla et feugiat adipisscinia pellentum leo.";
contentdivtxt1.classList.add("contentdivtextstyle1");
contentdiv.appendChild(contentdivtxt1);


var contentbutton=document.createElement("button");
contentbutton.innerHTML="Read more here-> "
contentbutton.classList.add("contentbuttonstyle");
contentdiv.appendChild(contentbutton);
x2.appendChild(contentdiv);


var imgdiv=document.createElement("DIV");
imgdiv.classList.add("contentdivstyleleft");
//imgdiv.style.backgroundColor="pink";
imgdiv.style.backgroundImage="url(js/pexels-photo-756453.jpeg)";

x2.appendChild(imgdiv);
















