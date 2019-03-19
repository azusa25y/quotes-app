var loveQuotesArray;

var loadCard = function(){
    for (var card in loveQuotesArray){
        console.log(loveQuotesArray[card].FrontText);
    }
};

window.onload = function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "LoveJSON.txt", false);  
    xhr.send(null);
    
    loveQuotesArray = JSON.parse(xhr.response);

    
var btn = document.getElementById("refresh_btn");
var contents = document.getElementById("lquotes");
var i=0;
    
btn.onclick = function myFunction(){ 
 lquotes.innerHTML=loveQuotesArray[0].FrontText;
//Change the text of button
//Randomization
// var randomization = Math.floor(Math.random()*5);
// i = randomization;

}};
