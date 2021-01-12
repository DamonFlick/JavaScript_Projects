var c = document.getElementById("canvas_1");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();

var grd = ctx.createLinearGradient(0, 0, 170, 0);
grd.addColorStop(0, "blue");
grd.addColorStop(1,"yellow");

ctx.fillStyle = grd;
ctx.fillRect(0,0,200,100)


//Form Validation

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Please write your name to continue");
        return false;
    }
}

function displayType(dog) {
    var dogName = dog.getAttribute("data-dog");
    alert(dogName + " is " + dog.innerHTML);
}



