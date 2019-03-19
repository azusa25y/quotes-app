var $$ = Dom7;
var QuotesArray;
var e=0;
var i=0;
var m=0;
var s=0;

var loveshow = function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "LoveJSON.txt", false);  // synchronous request
    xhr.send(null);
    QuotesArray = JSON.parse(xhr.response);
};


window.onload = function loveshow(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "LoveJSON.txt", false); 
    xhr.send(null);
    
    QuotesArray = JSON.parse(xhr.response);

//     var ajax = $$.ajax(getCORSCompliantURL("https://talaikis.com/api/quotes/random/"));
//    ajax.done(
//        function everything(msg){    
//            $$("#contense").attr("src", quote.url, author.url);
//            alert("hey");
//        })
};



function myFunction(){ 
   lquotes.innerHTML=QuotesArray[i].FrontText;
 //  lauthor.innerHTML=QuotesArray[i].LAuthor;
//Randomization
 var randomization = Math.floor(Math.random()*10);
 i = randomization;
};

function myFunctionMot(){ 
   mquotes.innerHTML=QuotesArray[m].Motivation;
//Randomization
 var randomization = Math.floor(Math.random()*10);
 m = randomization;
};

function myFunctionSuc(){ 
   squotes.innerHTML=QuotesArray[s].Success;
//Randomization
 var randomization = Math.floor(Math.random()*10);
 s = randomization;
};

function myFunctionEvery(){ 
   everyquotes.innerHTML=QuotesArray[e].Every;
//Randomization
 var randomization = Math.floor(Math.random()*10);
 e = randomization;
};

//configuration data
var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.myapp.test',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
      {
      path: '/favorite/', 
      url: 'favorite.html',
      },
      {
      path: '/everythingq/', 
      url: 'every.html',
          on: {
          pageInit: function every() {
          loveshow;
          myFunctionEvery();
        }},
    },
       {
      path: '/motivationq/', 
      url: 'motivation.html',
           on: {
          pageInit: function motivation() {
          loveshow;
          myFunctionMot();
        }},
    },
       {
      path: '/successq/', 
      url: 'success.html',
           on: {
          pageInit: function success() {
          loveshow;
          myFunctionSuc();
        }},
    },
       {
      path: '/loveq/', 
      url: 'love.html',
          on: {
          pageInit: function love() {
          loveshow;
          myFunction();
        }},
    },
  ],
  },

);

var mainView = app.views.create('.view-main');

