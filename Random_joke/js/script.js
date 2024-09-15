const joke = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let randomJoke = () => {
  joke.classList.remove("fade");
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      joke.textContent = data.joke;
      joke.classList.add("fade");
    })
    .catch((error) => {
      console.error("Error fetching joke:", error);
    });
};

btn.addEventListener("click", randomJoke);

randomJoke();
