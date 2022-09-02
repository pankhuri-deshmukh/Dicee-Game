//alert("Working");

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
//alert("This is " + randomNumber1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
//alert("This is the second" + randomNumber2);

var left_img = document.querySelectorAll("img")[0];
var selectedImage1 = "images/dice" + randomNumber1 + ".png";
left_img.setAttribute("src",selectedImage1);

var right_img = document.querySelectorAll("img")[1];
var selectedImage2 = "images/dice" + randomNumber2 + ".png";
right_img.setAttribute("src", selectedImage2);

if(randomNumber1 > randomNumber2){
document.querySelector("h1").innerHTML = "Player 1 wins!";
}
else if(randomNumber1 < randomNumber2){
document.querySelector("h1").innerHTML = "Player 2 wins!";
}
else{
document.querySelector("h1").innerHTML = "Draw!";
}

