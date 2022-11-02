var color1 = document.getElementsByName("color1")[0];
var color2 = document.getElementsByName("color2")[0];
var css = document.querySelector("h3");
var body = document.getElementsByTagName("body")[0];

function changeColor(){
    body.style.background = "linear-gradient(to right, "+color1.value+", "+color2.value+")";
    css.textContent = body.style.background+";";
}

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);


