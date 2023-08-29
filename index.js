const number = document.querySelector("#num");
const advice = document.querySelector("#text");
const dice = document.querySelector(".dice");

function onAdvice() {
  const url = `https://api.adviceslip.com/advice`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      number.innerText = `#${data.slip.id}`;
      advice.innerText = `${data.slip.advice}`;
    });
}

dice.addEventListener("click", onAdvice);
