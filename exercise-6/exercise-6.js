const API_BEERS_URL = "https://api.punkapi.com/v2/beers";

document.addEventListener("DOMContentLoaded", () => {
  renderBeers();
});

const renderBeers = async () => {};

async function fetchUrl(url) {
  const body = await fetch(url);
  return await body.json();
}
