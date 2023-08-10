const gameboard = document.querySelector("#gameboard")
// const infoDisplay = document.querySelector("#info")
// const winner = document.querySelector("#winner")

// const startCells = ["", "", "", "", "", "", "", "", ""]

// let go = "circle"
// let circleScore = 0
// crossScore = 0
// let roundText = document.querySelector(".round-text")
// infoDisplay.textContent = "Circle goes first"


// const buttonContainer = document.getElementById('buttonContainer');
// // Add a click event listener to the button container
// buttonContainer.addEventListener('click', button => {
//     // Check if the clicked element has the 'round' class
//     if (button.target.classList.contains('round')) {
//         const value = button.target.value;
//         roundText.textContent = `${value} rounds match`
//     }
// });

function createBoard() {
    for (let i = 0; i < 9; i++) {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        // cellElement.addEventListener('click', addGo)
        gameboard.append(cellElement)
    }
}

createBoard()

// function addGo(e) {
//     const goDisplay = document.createElement('div')
//     goDisplay.classList.add(go)
//     e.target.append(goDisplay)
//     go = go === "circle" ? "cross" : "circle"
//     infoDisplay.textContent = go + "'s turn"
//     e.target.removeEventListener("click", addGo)
//     checkScore()
// }


// // checking score of players to check who is winner
// function checkScore() {
//     const allSquares = document.querySelectorAll(".square");
//     const winningCombos = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8],
//         [0, 3, 6], [1, 4, 7], [2, 5, 8],
//         [0, 4, 8], [2, 4, 6]
//     ];

//     let circleWins = false;
//     let crossWins = false;

//     winningCombos.forEach(array => {
//         if (array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))) {
//             circleWins = true;
//         } else if (array.every(cell => allSquares[cell].firstChild?.classList.contains('cross'))) {
//             crossWins = true;
//         }
//     });

//     if (circleWins) {
//         infoDisplay.textContent = "Circle Wins";
//         circleScore += 1;
//         allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
//     } else if (crossWins) {
//         infoDisplay.textContent = "Cross Wins";
//         allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
//         crossScore++;
//     } else if ([...allSquares].every(square => square.firstChild)) {
//         infoDisplay.textContent = "It's a Draw!";
//     }

//     winner.textContent = `circle ${circleScore} wins | cross ${crossScore} wins`;
// }



// // restart button functionality goes here

// const restartButton = document.getElementById("restart")
// restartButton.addEventListener("click", restartGame);

// function restartGame() {
//     // window.location.reload();
//     const allSquares = document.querySelectorAll(".square");
//     allSquares.forEach(square => square.innerHTML = "");
//     circleScore === 0
//     crossScore === 0
// }


// // reset button functionality goes here

// const resetButton = document.getElementById("reset")
// resetButton.addEventListener("click", resetGame)

// function resetGame() {
//     const allSquares = document.querySelectorAll(".square");
//     allSquares.forEach(square => square.innerHTML = "");
//     go = "circle";
//     infoDisplay.textContent = "Circle's turn";
//     enableClicks();
// }

// function enableClicks() {
//     const allSquares = document.querySelectorAll(".square");
//     allSquares.forEach(square => square.addEventListener("click", addGo));
// }


