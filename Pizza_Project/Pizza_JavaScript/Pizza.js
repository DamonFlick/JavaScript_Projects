function getReceipt()  {    
    
    //Initialize string to be passed and compiled into full reciept
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size"); //If a size is selected, add selected value to string
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1+selectedSize+"<br>"
        }
    }
    if (selectedSize === "Personal Pizza") {   //Attribute Size Price
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Titanic Pizza") {
        sizeTotal = 300;
    }
    runningTotal = sizeTotal;                           //updatetotal
    console.log(selectedSize+" =$"+sizeTotal+".00");
    console.log("size text1: "+text1);
    console.log("subtotal: $"+runningTotal+".00");
    getTopping(runningTotal,text1);
};

function getTopping(runningTotal,text1) {      //Topping subroutine
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray =document.getElementsByClassName("toppings");
    for (var j = 0; j< toppingArray.length; j++) {                  //If any toppings are selected, add their value to recipt
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping item: ("+toppingArray[j].value+")");
            text1 = text1+toppingArray[j].value+"<br>";
        }
    }
    var toppingCount = selectedTopping.length;    //Count toppings, - one free topping
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);     
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping - 1 free topping ="+"$"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+     //Print Concat String Recipt
        runningTotal+".00"+"</strong></h3>";            
};