const jokeContainer = document.getElementById("joke-container");
const generatButton  = document.getElementById("generat-button")

async function fetchJoke(){
    const data = await fetch("https://v2.jokeapi.dev/joke/Any?type=single")
    const readableData = await data.json();
    const joke = readableData.joke;
    jokeContainer.innerText  = joke;
}

fetchJoke()

generatButton.addEventListener("click" , fetchJoke)