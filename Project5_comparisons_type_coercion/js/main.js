document.write(typeof 3); /* type of*/
function myFunc() {
    document.getElementById("Test").innerHTML=isNaN('string');/* Test for NaN*/
}

document.write(2E310); /*Infinity*/
document.write(-2E310); /*negInfinity*/


document.write(11>3);   /***Boolean Comparison***/
console.log("2"+2);      /*Type Coercion*/
console.log(2>2);        
document.write(10+5==15);  
document.write(10+6==15);    /*End Boolean Comp.*/

/*** Type and Value Comparison ***/
var a=8         /*Var for Compare*/
var b=8
var a2='eight'
var b2='nine'
var c=9

function myFunc2 () {         
    document.getElementById("Test2").innerHTML= (a2 === b);
}


  /** Locical Operators */
document.write(10>3 && 2==2);           
document.write(10>11 || 2==2);
document.write(10>3 || 2!=3);

function notFunc() {                 /** Not */
    document.getElementById("Not").innerHTML= !(20>10);
}