const gameBoard = document.createElement("div")
gameBoard.setAttribute("id", "gameboard")

const infoDisplay = document.querySelector("#info")
infoDisplay.textContent = "circles turn"
let move = "circle"



function createBoard() {
    for (let i = 0; i < 9; i++) {
        document.body.appendChild(gameBoard)
        const cell = document.createElement("div")
        cell.classList.add("square")
        cell.addEventListener("click", clickHandler)
        gameBoard.append(cell)
    }
}
createBoard()


function clickHandler(e) {
    const player = document.createElement('div')
    player.classList.add(move)
    e.target.append(player)
    move = move === "circle" ? "cross" : "circle"
    infoDisplay.textContent = move + "'s turn"
    e.target.removeEventListener("click", clickHandler)
    checkScore()
}

// checking score of players to check who is winner
function checkScore() {
    var allSquares = document.querySelectorAll(".square");
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];

    let circleWins = false;
    let crossWins = false;

    let circleScore = 0
    let crossScore = 0

    winningCombos.forEach(array => {
        if (array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'))) {
            circleWins = true;
            circleScore++
        } else if (array.every(cell => allSquares[cell].firstChild?.classList.contains('cross'))) {
            crossWins = true;
            crossScore++
        }
    });

    if (circleWins) {
        infoDisplay.textContent = `circle ${circleScore} wins | cross ${crossScore} wins`;
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
    } else if (crossWins) {
        infoDisplay.textContent = `circle ${circleScore} wins | cross ${crossScore} wins`;
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)));
    } else if ([...allSquares].every(square => square.firstChild)) {
        infoDisplay.textContent = "It's a Draw!";
    }

    // infoDisplay.textContent = `circle ${circleScore} wins | cross ${crossScore} wins`;
}


let restartButton = document.querySelector("#restart-btn")
restartButton.addEventListener("click", resetGame);

function restartGame() {
    // window.location.reload();
    createBoard()

}


function resetGame() {
    // const allSquares = document.querySelectorAll(".square");
    // allSquares.forEach(square => square.innerHTML = "");
    // move = "circle";
    // infoDisplay.textContent = "Circle's turn";
    // enableClicks()
    createBoard()
}


function enableClicks() {
    const allSquares = document.querySelectorAll(".square");
    allSquares.forEach(square => square.addEventListener("click", clickHandler));
}



