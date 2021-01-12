let activePlayer = 'X'; //Keep track of whose turn it is

let selectedSquares = [];

function bodyAudio() {
    audio ('./media/OpeningTheme.mp3');
}

//Place X or O in a square   

function placeXOrO (squareNum) {
    if (!selectedSquares.some(element => element.includes(squareNum))) {
        let select = document.getElementById(squareNum)
        //Check player turn
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url(media/images/styled_X.png)'
        }
        else {
            select.style.backgroundImage = 'url(media/images/styled_O.png)'
        }

        //add selected square to the array
        selectedSquares.push(squareNum + activePlayer);

        //check win condition
        checkWinConditions();

        if (activePlayer === "X") {
            activePlayer = "O";
        }
        else {
            activePlayer = "X";
        }

        //Play Placement Sound
        if (activePlayer === "X") {
            audio ('./media/place2.mp3');
        }
        else {
            audio ('./media/computerplace.mp3');
        }
       

        //check to see if it's the computers turn.
        if(activePlayer == 'O') {
            disableClick(); 

            setTimeout(function () { computersTurn();}, 1000) //run Computers turn
        }
        return true;
    }
    function computersTurn() {             //Define Computers turn
        //needed boolean for while loop.
        let success = false;
        //This variable stores a random number
        let pickASquare;

        while(!success) {
            pickASquare = String(Math.floor(Math.random() * 9));

            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
                success = true;
            }
        }
    }
}

//Win Conditions
function checkWinConditions() {
    if      (arrayIncludes('0X','1X', '2X')) {drawWinLine(50, 100, 558, 100);}
            //X Win Possibilities
    else if (arrayIncludes('3X','4X', '5X')) {drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6X','7X', '8X')) {drawWinLine(50, 508, 558, 508);}
    else if (arrayIncludes('0X','3X', '6X')) {drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1X','4X', '7X')) {drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2X','5X', '8X')) {drawWinLine(508, 50, 508, 558);}
    else if (arrayIncludes('6X','4X', '2X')) {drawWinLine(100, 508, 510, 90);}
    else if (arrayIncludes('0X','4X', '8X')) {drawWinLine(100, 100, 520, 520);}

    //O Win Possibilities
    else if (arrayIncludes('0O','1O', '2O')) {drawWinLine(50, 100, 558, 100);}
    else if (arrayIncludes('3O','4O', '5O')) {drawWinLine(50, 304, 558, 304);}
    else if (arrayIncludes('6O','7O', '8O')) {drawWinLine(50, 508, 558, 508);}
    else if (arrayIncludes('0O','3O', '6O')) {drawWinLine(100, 50, 100, 558);}
    else if (arrayIncludes('1O','4O', '7O')) {drawWinLine(304, 50, 304, 558);}
    else if (arrayIncludes('2O','5O', '8O')) {drawWinLine(508, 50, 508, 558);}
    else if (arrayIncludes('6O','4O', '2O')) {drawWinLine(100, 508, 510, 90);}
    else if (arrayIncludes('0O','4O', '8O')) {drawWinLine(100, 100, 520, 520);}

    //Check for Tie
    else if (selectedSquares.length >= 9)  {
        audio('media/tie2.mp3')
        //.3 second timer to reset Game
        setTimeout(function() {resetGame();},1000);
    }

    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);

        if (a === true && b === true && c === true) { return true; }
    }
}

// PART SIX  Computer Turn and Audio Func

function disableClick() {
    body.style.pointerEvents = "none";
    setTimeout(function () {body.style.pointerEvents = 'auto';}, 1000);
}

function audio(audioURL) {
    let audio = new Audio(audioURL)
    audio.play();
}

/////////////////////////////////////////////////////////////////////Draw Win Line

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {  
    const canvas = document.getElementById('win-lines');  //Access Canvas
    const c = canvas.getContext('2d');
    let x1 = coordX1,                                      // Define Variables
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x  = x1,
        y  = y1;

    function animateLineDrawing() {                         
        const animationLoop = requestAnimationFrame(animateLineDrawing);

        c.clearRect(0, 0, 608, 608);

        c.beginPath();
        c.moveTo(x1,y1);
        c.lineTo(x,y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();

        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) {x += 10;}
            if (y < y2) {y += 10;}
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }

        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop);}
        }
    }
    function clear () {
        const animationLoop = requestAnimationFrame(clear);    //Clear Line after game
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();                    

    audio('./media/winGame2.mp3');

    animateLineDrawing();

    setTimeout(function () {clear(); resetGame();}, 1000);  //Delay before reset

}

//This function resets the game in a tie or win.
function resetGame() {
    //This loop iterates throuigh each square
    for (let i = 0; i<9; i++) {
        let square = document.getElementById(String(i));

        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}