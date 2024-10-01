const jokeContainer = document.getElementById("joke");

const jokeButton = document.getElementById("jokeButton");
let urlJoke = "https://v2.jokeapi.dev/joke/Any?type=single";
let getJoke = () => {
  jokeContainer.classList.remove("animate__animated");
  jokeContainer.classList.remove("animate__jackInTheBox");
  fetch(urlJoke)
    .then((data) => data.json())
    .then((item) => {
      jokeContainer.textContent = `${item.joke}`;
      jokeContainer.classList.add("animate__animated");
      jokeContainer.classList.add("animate__jackInTheBox");
    });
};
jokeButton.addEventListener("click", getJoke);
getJoke();
