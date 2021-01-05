function myDictionary() {
    var Animal = {
        Species: "Snake",
        Color: "Black",
        Age: 5,
        Sound: "hiss",
        wrongSound: "bark",
    }
    
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
    
}