function fullSentence() {           //Concat string Method
    var part_1 = "Today "
    var part_2 = "is a day of "
    var part_3 = "impotant sedition."
    var whole_sentence =part_1.concat(part_2,part_3);
    document.getElementById("concat").innerHTML = whole_sentence;
}


function slice_Method() {                   //Slice name and make Uppercase
    var sentence = "All work and no play makes Damon a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section.toUpperCase();
}

function search_Method() {                  //Search for name
    var sentence = "All work and no play makes Damon a dull boy.";
    document.getElementById("search").innerHTML = sentence.search("Damon");
}

function string_Method() {                  //Number to string Value
    var num = 5;
    document.getElementById("Num_to_string").innerHTML = num.toString();
}

function precision_Method() {                  //Round to Significant Figures
    var num = 12345.6789;
    document.getElementById("Precision").innerHTML = num.toPrecision(7);
}

function fixed_Method() {                  //Turn float numbers to fixed string, rounding as needed
    var num = 12345.6789;
    document.getElementById("Fixed").innerHTML = num.toFixed();
}

function value_of_Method() {                  //Return primitive value of a string
    var str = "This is a string";
    document.getElementById("value_Of").innerHTML = str.valueOf();
}