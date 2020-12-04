const API_BEERS_URL = "https://api.punkapi.com/v2/beers";

//1. Using Fetch API
function onClickTextEjercise1() {}

//2. Http Request using Async/await
async function onClickTextEjercise2() {}

async function fetchUrl(url) {
  const body = await fetch(url);
  return await body.json();
}
