

//Define Variables, assigne string values and change font color
var A ="Hello, World!"; 
var A = A.fontcolor("green");
var B ="\"Oh my!\" said the frog. ";
var B = B.fontcolor("orange");



//Print joined strings
document.write(B+A);
//etc
var blues= "I have the blues." , blues= blues.fontcolor("blue");
document.write(blues);
//Define a variable and give an expression value
var expression = (3+3);
document.write(expression); //Print expression

function myFirstFunction() {  //Define function
    var str = "This text is green!"; //Create variable with string value
    var result = str.fontcolor("green"); //Change font color
    document.getElementById("Green_Text").innerHTML = result; //Trun inner HTML to colored string 
}