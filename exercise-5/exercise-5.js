const API_RANDOM_FOOD_URL = "https://foodish-api.herokuapp.com/api";

document.addEventListener("DOMContentLoaded", () => {});

async function fetchUrl(url) {
  const body = await fetch(url);
  return await body.json();
}
