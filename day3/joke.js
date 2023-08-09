const jokeText = document.querySelector(".jokeText")
const jokeGenerateButton = document.getElementById("joke")

let newJoke = jokeGenerateButton.addEventListener("click", getJoke)

async function getJoke() {
    const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
    const data = await response.json()
    const joke = data.setup
    jokeText.textContent = joke
}



