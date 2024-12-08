let signUpBtn = document.querySelector(".signUp");
let loginBtn = document.querySelector(".login");
let signUpCard = document.getElementById("signUpCard");
let loginCard = document.getElementById("loginCard");
let closeSignUpBtn = document.querySelector(".close-signUp");
let closeLoginBtn = document.querySelector(".close-login");
let innerPG = document.querySelector(".innerPG");
let submitBtn = document.querySelector(".submitBtn");
let firstPg = document.querySelector(".firstPg")
let firstPgheader = document.querySelector(".firstPg-header"); 
let innerPGherosection = document.querySelector(".innerPG-hero-section")
signUpBtn.addEventListener("click" , function (){
    signUpCard.style.display = "block";
});

loginBtn.addEventListener("click" , function (){
    loginCard.style.display = "block";
});

closeSignUpBtn.addEventListener("click" , function(){
    signUpCard.style.display = "none";
});

closeLoginBtn.addEventListener("click" , function(){
    loginCard.style.display = "none";
});

submitBtn.addEventListener("click" , function(){
    innerPG.style.display = "block";
    innerPGherosection.style.display = "block"
    signUpCard.style.display = "none";
    firstPg.style.display = "none";
    firstPgheader.style.display = "none"
});
