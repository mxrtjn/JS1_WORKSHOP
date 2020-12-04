const API_BEERS_URL = "https://api.punkapi.com/v2/beers";

//1. Using Fetch API
function onClickTextEjercise1() {
  const promise = fetch(API_BEERS_URL);
  promise
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      document.querySelector("#content-exercise-1").innerHTML = JSON.stringify(
        data
      );
    });
}

//2. Http Request using Async/await
async function onClickTextEjercise2() {
  const beers = await fetchUrl(API_BEERS_URL);
  document.querySelector("#content-exercise-2").innerHTML = JSON.stringify(
    beers
  );
}

async function fetchUrl(url) {
  const body = await fetch(url);
  return await body.json();
}
