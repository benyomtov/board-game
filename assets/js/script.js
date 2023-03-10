var gameboard = document.querySelector(".gameboard");
const colorArray = ["red", "orange", "yellow", "green", "blue", "purple"];

function randomizeSquareColor() {   
    var color = '';
    color += colorArray[Math.floor(Math.random() * 6)];
    return color;
}



function createSquares(){
    for (let i = 0; i < 100; i++) {
    var square = document.createElement("div");
    square.className = "gameboard-square";
    square.id = i;
    if (i === 0) {
        square.classList.add("top-left-corner");
    } else if (i === 9){
        square.classList.add("top-right-corner");
    } else if (i === 90){
        square.classList.add("bottom-left-corner");
    } else if (i === 99){
        square.classList.add("bottom-right-corner");
    } else if ((i > 0) && (i <9)) {
        square.classList.add("top");
    } else if ((i > 90) && (i <99)) {
        square.classList.add("bottom");
    } else if ((i === 10) || (i === 20) || (i === 30) || (i === 40) || (i === 50) || (i === 60) || (i === 70) || (i === 80)) {
        square.classList.add("left");
    }else if ((i === 19) || (i === 29) || (i === 39) || (i === 49) || (i === 59) || (i === 69) || (i === 79) || (i === 89)) {
        square.classList.add("right");
    } else {
        square.classList.add("middle");
    }
    if (i === 90) {
        square.classList.add("marked");
    }
    square.style.width = "58px";
    square.style.height = "58px";
    square.style.border = "1px dotted black"
    square.style.backgroundColor = randomizeSquareColor();
    square.style.margin = "0";
    gameboard.appendChild(square);
    }
}

createSquares();

var redButton = document.getElementById("red");
var orangeButton = document.getElementById("orange");
var yellowButton = document.getElementById("yellow");
var greenButton = document.getElementById("green");
var blueButton = document.getElementById("blue");
var purpleButton = document.getElementById("purple");

var topLeftCorner = document.querySelector(".top-left-corner");
var topRightCorner = document.querySelector(".top-right-corner");
var bottomLeftCorner = document.querySelector(".bottom-left-corner");
var bottomRightCorner = document.querySelector(".bottom-right-corner");
var topSide = document.querySelectorAll(".top");
var leftSide = document.querySelectorAll(".left");
var rightSide = document.querySelectorAll(".right");
var bottomSide = document.querySelectorAll(".bottom");
var middle = document.querySelectorAll(".middle");


redButton.addEventListener("click", () => markBoard("red"));
orangeButton.addEventListener("click", () => markBoard("orange"));
yellowButton.addEventListener("click", () => markBoard("yellow"));
greenButton.addEventListener("click", () => markBoard("green"));
blueButton.addEventListener("click", () => markBoard("blue"));
purpleButton.addEventListener("click", () => markBoard("purple"));

var lastCount = 0;

var gameboardSquares = document.querySelectorAll(".gameboard-square");

var score = -1;
const scoreDisplay = document.getElementById("score");
scoreDisplay.textContent = "Moves: " + score;

const initialSquare = document.getElementById("90");
var initialColor = initialSquare.style.backgroundColor;
markBoard(initialColor);

function markBoard(thisColor) {

    var markedSquare = document.querySelectorAll(".marked");

    var count = 0;

    var sameColor = true;
    
    for (let i = 0; i < markedSquare.length; i++) {

        var thisSquareId = markedSquare[i].id;
        var thisSquare = document.getElementById(thisSquareId);
        markedSquare[i].style.backgroundColor = thisColor;
        var thisClass = markedSquare[i].className;
        var classArray = thisClass.split(" ");

        if (classArray[1] == "bottom-left-corner") {

            var thisId = bottomLeftCorner.id;
            var thisIdNumber = Number(thisId);
            var topIdNumber = thisIdNumber - 10;
            var topId = topIdNumber.toString();
            var topSibling = document.getElementById(topId);
            var topSiblingColor = topSibling.style.backgroundColor;
            if (topSiblingColor == thisColor) {
                topSibling.classList.add("marked");
                count++;
            } 


            var nextSibling = bottomLeftCorner.nextElementSibling;
            var nextSiblingColor = nextSibling.style.backgroundColor;
            if (nextSiblingColor == thisColor) {
                nextSibling.classList.add("marked");
                count++;
            }
        } else if (classArray[1] == "bottom-right-corner") {
            var thisId = bottomRightCorner.id;
            var thisIdNumber = Number(thisId);
            var topIdNumber = thisIdNumber - 10;
            var topId = topIdNumber.toString();
            var topSibling = document.getElementById(topId);
            var topSiblingColor = topSibling.style.backgroundColor;
            if (topSiblingColor == thisColor) {
                topSibling.classList.add("marked");
                count++;
            } 


            var previousSibling = bottomRightCorner.previousElementSibling;
            var previousSiblingColor = previousSibling.style.backgroundColor;
            if (previousSiblingColor == thisColor) {
                nextSibling.classList.add("marked");
                count++;
            }
        } else if (classArray[1] == "top-right-corner") {
            var thisId = topRightCorner.id;
            var thisIdNumber = Number(thisId);
            var bottomIdNumber = thisIdNumber + 10;
            var bottomId = bottomIdNumber.toString();
            var bottomSibling = document.getElementById(bottomId);
            var bottomSiblingColor = bottomSibling.style.backgroundColor;
            if (bottomSiblingColor == thisColor) {
                bottomSibling.classList.add("marked");
                count++;
            } 


            var previousSibling = bottomRightCorner.previousElementSibling;
            var previousSiblingColor = previousSibling.style.backgroundColor;
            if (previousSiblingColor == thisColor) {
                nextSibling.classList.add("marked");
                count++;
            }
        } else if (classArray[1] == "top-left-corner") {
            var thisId = topLeftCorner.id;
            var thisIdNumber = Number(thisId);
            var bottomIdNumber = thisIdNumber + 10;
            var bottomId = bottomIdNumber.toString();
            var bottomSibling = document.getElementById(bottomId);
            var bottomSiblingColor = bottomSibling.style.backgroundColor;
            if (bottomSiblingColor == thisColor) {
                bottomSibling.classList.add("marked");
                count++;
            } 


            var nextSibling = topLeftCorner.nextElementSibling;
            var nextSiblingColor = nextSibling.style.backgroundColor;
            if (nextSiblingColor == thisColor) {
                nextSibling.classList.add("marked");
                count++;
            }
        } else if (classArray[1] == "top") {
            var thisId = thisSquareId;
            var thisIdNumber = Number(thisId);
            var bottomIdNumber = thisIdNumber + 10;
            var bottomId = bottomIdNumber.toString();
            var bottomSibling = document.getElementById(bottomId);
            var bottomSiblingColor = bottomSibling.style.backgroundColor;
            if (bottomSiblingColor == thisColor) {
                bottomSibling.classList.add("marked");
                count++;
            } 
            var nextSibling = thisSquare.nextElementSibling;
            var nextSiblingColor = nextSibling.style.backgroundColor;
            if (nextSiblingColor == thisColor) {
                nextSibling.classList.add("marked");
                count++;
            }

            var previousSibling = thisSquare.previousElementSibling;
            var previousSiblingColor = previousSibling.style.backgroundColor;
            if (previousSiblingColor == thisColor) {
                previousSibling.classList.add("marked");
                count++;
            }
        }  else if (classArray[1] == "bottom") {
            var thisId = thisSquareId;
            var thisIdNumber = Number(thisId);
            var topIdNumber = thisIdNumber - 10;
            var topId = topIdNumber.toString();
            var topSibling = document.getElementById(topId);
            var topSiblingColor = topSibling.style.backgroundColor;
            if (topSiblingColor == thisColor) {
                topSibling.classList.add("marked");
                count++;
            } 
            var nextSibling = thisSquare.nextElementSibling;
            var nextSiblingColor = nextSibling.style.backgroundColor;
            if (nextSiblingColor == thisColor) {
                nextSibling.classList.add("marked");
                count++;
            }

            var previousSibling = thisSquare.previousElementSibling;
            var previousSiblingColor = previousSibling.style.backgroundColor;
            if (previousSiblingColor == thisColor) {
                previousSibling.classList.add("marked");
                count++;
            }
        }  else if (classArray[1] == "left") {
            var thisId = thisSquareId;
            var thisIdNumber = Number(thisId);
            var bottomIdNumber = thisIdNumber + 10;
            var bottomId = bottomIdNumber.toString();
            var bottomSibling = document.getElementById(bottomId);
            var bottomSiblingColor = bottomSibling.style.backgroundColor;
            if (bottomSiblingColor == thisColor) {
                bottomSibling.classList.add("marked");
                count++;
            } 

            var nextSibling = thisSquare.nextElementSibling;
            var nextSiblingColor = nextSibling.style.backgroundColor;
            if (nextSiblingColor == thisColor) {
                nextSibling.classList.add("marked");
                count++;
            }

            var thisTopId = thisSquareId;
            var thisTopIdNumber = Number(thisTopId);
            var topIdNumber = thisTopIdNumber - 10;
            var topId = topIdNumber.toString();
            var topSibling = document.getElementById(topId);
            var topSiblingColor = topSibling.style.backgroundColor;
            if (topSiblingColor == thisColor) {
                topSibling.classList.add("marked");
                count++;
            }
        }  else if (classArray[1] == "right") {
            var thisId = thisSquareId;
            var thisIdNumber = Number(thisId);
            var bottomIdNumber = thisIdNumber + 10;
            var bottomId = bottomIdNumber.toString();
            var bottomSibling = document.getElementById(bottomId);
            var bottomSiblingColor = bottomSibling.style.backgroundColor;
            if (bottomSiblingColor == thisColor) {
                bottomSibling.classList.add("marked");
                count++;
            } 

            var previousSibling = thisSquare.previousElementSibling;
            var previousSiblingColor = previousSibling.style.backgroundColor;
            if (previousSiblingColor == thisColor) {
                previousSibling.classList.add("marked");
                count++;
            }

            var thisTopId = thisSquareId;
            var thisTopIdNumber = Number(thisTopId);
            var topIdNumber = thisTopIdNumber - 10;
            var topId = topIdNumber.toString();
            var topSibling = document.getElementById(topId);
            var topSiblingColor = topSibling.style.backgroundColor;
            if (topSiblingColor == thisColor) {
                topSibling.classList.add("marked");
                count++;
            }
        }  else {
            var thisId = thisSquareId;
            var thisIdNumber = Number(thisId);
            var bottomIdNumber = thisIdNumber + 10;
            var bottomId = bottomIdNumber.toString();
            var bottomSibling = document.getElementById(bottomId);
            var bottomSiblingColor = bottomSibling.style.backgroundColor;
            if (bottomSiblingColor == thisColor) {
                bottomSibling.classList.add("marked");
                count++;
            } 

            var nextSibling = thisSquare.nextElementSibling;
            var nextSiblingColor = nextSibling.style.backgroundColor;
            if (nextSiblingColor == thisColor) {
                nextSibling.classList.add("marked");
                count++;
            }

            var previousSibling = thisSquare.previousElementSibling;
            var previousSiblingColor = previousSibling.style.backgroundColor;
            if (previousSiblingColor == thisColor) {
                previousSibling.classList.add("marked");
                count++;
            }

            var thisTopId = thisSquareId;
            var thisTopIdNumber = Number(thisTopId);
            var topIdNumber = thisTopIdNumber - 10;
            var topId = topIdNumber.toString();
            var topSibling = document.getElementById(topId);
            var topSiblingColor = topSibling.style.backgroundColor;
            if (topSiblingColor == thisColor) {
                topSibling.classList.add("marked");
                count++;
            }
        }

    }
    if (count == lastCount) {
        lastCount = 0;
            score++;
            scoreDisplay.textContent = "Moves: " + score;

            var updatedMarkedSquares = document.querySelectorAll(".marked");

            for (var j = 0; j < updatedMarkedSquares.length; j++) {
                var thisMarkedSquare = updatedMarkedSquares[j]; 
                thisMarkedSquare.style.border = "1px dashed white";
            }
        
        var squareColor = gameboardSquares[0].style.backgroundColor;

        for (let i = 1; i < gameboardSquares.length; i++) {

            if (gameboardSquares[i].style.backgroundColor != squareColor) {
                sameColor = false;
            }
        }
    
        if (sameColor) {
            score = 0;
            alert("You Win!");
        }

        return;
    } else {
        lastCount = count;
        markBoard(thisColor);
    }

}