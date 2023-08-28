const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
  span.addEventListener('click', (e) => {
    e.target.classList.add('active');
  });
  span.addEventListener('animationend', (e) => {
    e.target.classList.remove('active');
  });
  
  // Initial animation
  setTimeout(() => {
    span.classList.add('active');
  }, 750 * (idx+1))
});

// use a chatbot
function openForm() {
  document.getElementById("pop_chat").style.display = "block";
}

function closeForm() {
  document.getElementById("pop_chat").style.display = "none";
}
// use bot
function setup() {
	chatbot.loadFiles(['bot.rive']);
}

window.onload = setup;


// using time refresh setup
`use strict`
var datetime = new Date();
console.log(datetime);
document.getElementById("time").textContent = datetime; //it will print on html page



`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);

  `use strict`
  var datetime = new Date().getDate();
  console.log(datetime); // it will represent date in the console of developers tool
  document.getElementById("time").textContent = datetime; //it will print on html page
  

  `use strict`
var datetime = new Date().getDay();
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime; //it will print on html page


`use strict`
var datetime = new Date().getFullYear();
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime; //it will print on html page

`use strict`
var datetime = new Date().getHours()+1;
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime; // represent on webbrowser

`use strict`
var datetime = new Date().getMilliseconds();
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime; // represent on html page


`use strict`
var datetime = new Date().getMonth() + 1;
console.log(datetime); // it will represent date in the console of  developers tool
document.getElementById("time").textContent = datetime; // represent on html page

`use strict`
var datetime = new Date().toDateString();
console.log(datetime); // it will represent date in the console of developer tool
document.getElementById("time").textContent = datetime; // represent on html page



`use strict`
var datetime = new Date().toLocaleTimeString();
console.log(datetime); // it will represent date in the console of developers tool
document.getElementById("time").textContent = datetime; // represent on html page




// use the loader
// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
  $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
  jQuery(document).ready(function() {
  $('body').backstretch([
      "images/loadpf.gif"
       ], 	{duration: 3200, fade: 1300});
  });
})




// let number =20;
// const  pass = 30;
// console.log(number+pass);