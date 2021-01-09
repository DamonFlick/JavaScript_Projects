function countFunc() {
    var Digit="";
    var X=1;
    while (X < 11) {
        Digit += "<br><br>" + X;
        X++;
    }
    document.getElementById("loop").innerHTML= Digit;
}


//List of instruments For Loop

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_instruments").innerHTML = Content;
}

//Array Function

function arrayFunc() {
    var Bird_pics = [];
    Bird_pics[0] = "flying";
    Bird_pics[1] = "eating";
    Bird_pics[2] = "pooping";
    Bird_pics[3] = "screaming";
    let input = document.getElementById("bird_input").value  //Let KeyWord
    input = input--
    document.getElementById("bird_display").innerHTML = "In this picture, the bird is "
        + Bird_pics[input];
}

//Constant Function

function constantFunc() {
    const Musical_instrument = {type:"guitar", brand:"Fender", model: "Telecaster", color:"Natural"};
    Musical_instrument.color= "blue";
    Musical_instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the " +
        Musical_instrument.type + " was " + Musical_instrument.price + ". " + "It's finish was " + Musical_instrument.color + ". ";
}

//Console Math/Return Statement

function getRectArea(width, height) {
    if (width>0 && height > 0) {
        return width * height;
    }
    return 0;
}

console.log(getRectArea(3,7));

// let Object Method

function constantFunc() {
    let Musical_instrument = {
        type:"guitar", 
        brand:"Fender", 
        model: "Telecaster", 
        color:"Natural",
        description: function() {
            return "The cost of the " +
            this.type + " was " + this.price + ". " + 
            "It's finish was " + this.color + ". ";
        }
    };
    Musical_instrument.color= "blue";
    Musical_instrument.price = "$900";
    document.getElementById("Constant").innerHTML = Musical_instrument.description();
    }


//Break Statement

var text= "";
var i;
for (i = 0; i < 10; i++) {
    if (i=== 3) {break;}
    text += "The number is " + i + "<br>";
}
document.getElementById("break_statement").innerHTML = text;