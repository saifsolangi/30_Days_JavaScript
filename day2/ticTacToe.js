const gameboard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")

const startCells = ["", "", "", "", "", "", "", "", ""]

let go = "circle"
infoDisplay.textContent = "Circle goes first"

function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gameboard.append(cellElement)
    })
}

createBoard()

function addGo(e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    infoDisplay.textContent = go + "'s turn"
    e.target.removeEventListener("click", addGo)
    checkScore()
}

function checkScore() {

    const allSquares = document.querySelectorAll(".square")
    console.log(allSquares[0])

    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]

    winningCombos.forEach(array => {
        const circleWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('circle'))

        if (circleWins) {
            infoDisplay.textContent = "Circle Wins"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }

    })

    winningCombos.forEach(array => {
        const crossWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('cross'))

        if (crossWins) {
            infoDisplay.textContent = "Cross Wins"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }

    })
}

const restartButton = document.getElementById("restart")
restartButton.addEventListener("click", restartGame);

function restartGame() {
    window.location.reload();
}


const resetButton = document.getElementById("reset")
resetButton.addEventListener("click", resetGame)

function resetGame() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => square.innerHTML = "");
    go = "circle";
    infoDisplay.textContent = "Circle's turn";

    enableClicks();
}

function enableClicks() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => square.addEventListener("click", addGo));
}
