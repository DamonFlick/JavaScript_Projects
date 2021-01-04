
/*Random Alert*/
window.alert(Math.floor(Math.random() *100));
/* Addition */
function addition(value1,value2) {
    var a = document.getElementById('addVal1').value;
    var num1 = parseInt(a,10);
    var b = document.getElementById('addVal2').value;
    var num2 = parseInt(b,10);
    var result = (num1+num2);
    
    document.getElementById('addRes').innerHTML=result;  
}
/* Subtraction */
function subtraction(value1,value2) {
    var a = document.getElementById('subVal1').value;
    var num1 = parseInt(a,10);
    var b = document.getElementById('subVal2').value;
    var num2 = parseInt(b,10);
    var result = (num1-num2);
    
    document.getElementById('subRes').innerHTML=result;  
}

/* Multiplication */
function multi(value1,value2) {
    var a = document.getElementById('mVal1').value;
    var num1 = parseInt(a,10);
    var b = document.getElementById('mVal2').value;
    var num2 = parseInt(b,10);
    var result = (num1*num2);
    
    document.getElementById('mRes').innerHTML=result;  
}

/* Division */
function divi(value1,value2) {
    var a = document.getElementById('dVal1').value;
    var num1 = parseInt(a,10);
    var b = document.getElementById('dVal2').value;
    var num2 = parseInt(b,10);
    var result = (num1/num2);
    
    document.getElementById('dRes').innerHTML=result;  
}

/* Multiple Expressions */
function exp(value1,value2) {
    var a = document.getElementById('eVal1').value;
    var num1 = parseInt(a,10);
    var b = document.getElementById('eVal2').value;
    var num2 = parseInt(b,10);
    var result = (num1/num2)*123 / 6-2;
    
    document.getElementById('eRes').innerHTML=result;  
}


/* Modulus  */
function remainder(value1,value2) {
    var a = document.getElementById('rVal1').value;
    var num1 = parseInt(a,10);
    var b = document.getElementById('rVal2').value;
    var num2 = parseInt(b,10);
    var result = (num1%num2);
    
    document.getElementById('rRes').innerHTML=result;  
}

/* Negation  */
function toNeg(value1) {
    var a = document.getElementById('negVal1').value;
    var num1 = parseInt(a,10);
    var result = -num1;
    document.getElementById('negRes').innerHTML=result;  
}
/* Incriment  */
function inc(value1) {
    var a = document.getElementById('incVal1').value;
    var num1 = parseInt(a,10);
    var result = ++num1;
    document.getElementById('incRes').innerHTML=result;  
}

/* Decriment  */
function dec(value1) {
    var a = document.getElementById('decVal1').value;
    var num1 = parseInt(a,10);
    var result = --num1;
    document.getElementById('decRes').innerHTML=result;  
}

