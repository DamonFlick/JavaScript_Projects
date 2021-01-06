
 var x = 10;                  //NOTE: Move var to global in order to run following code. 
function addNum1() {
   // X was here, to break addNum2 
    document.write(20+x+"<br>")
 
}
function addNum2() {
    
    document.write(90+x+"<br>")
 
}
addNum1();
addNum2();


/** IF, Else, Else if */
if (1<2) {    /* Basic if*/
    document.write("The left number is smaller than the number on the right.");
}

function getDate() {                      /*Get Time, check time of day with If*/
    if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}

function ageFunc() {                      // Check age, and blank field with If and Else/If
    Age = document.getElementById("Age").value;
    if (Age >=18) {
        Vote = "You are old enough to vote!";
    }
    else if (Age == 17) {
        Vote = "You will be old enought to vote soon! <br> Check out your local races.";
    }
    else if (Age < 17 && Age != 0) {
        Vote = "You are not old enough to vote.";
    }
    else {
        Vote = "Please enter your age!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function timeFunc() {                   //Check time of day
    var Time= new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning time!";
    }
    else if( Time >12 == Time < 18) {
        Reply = "It is the afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}