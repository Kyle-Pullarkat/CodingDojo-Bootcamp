
var like1 = 9;
var like2 = 12;
var like3 = 3;
var countElement = document.querySelector("#likez")
var countElement2 = document.querySelector("#likez2") 
var countElement3 = document.querySelector("#likez3")

function likes1(){
    like1++;
    countElement.innerText = like1 + "like(s)";
}

function likes2(){
    like2++;
    countElement2.innerText = like2 + "like(s)";
}

function likes3(){
    like3++;
    countElement3.innerText = like3 + "like(s)";
}