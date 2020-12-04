const API_RANDOM_FOOD_URL = "https://foodish-api.herokuapp.com/api";

document.addEventListener("DOMContentLoaded", () => {
  loadRandomFood();
  document
    .querySelector("#btnRandomFood")
    .addEventListener("click", loadRandomFood);
});

const loadRandomFood = async () => {
  const randomFood = await fetchUrl(API_RANDOM_FOOD_URL);
  document.querySelector("#foodfishImg").src = randomFood.image;
};

async function fetchUrl(url) {
  const body = await fetch(url);
  return await body.json();
}
