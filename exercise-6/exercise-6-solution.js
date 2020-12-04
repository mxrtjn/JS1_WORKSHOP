const API_BEERS_URL = "https://api.punkapi.com/v2/beers";

document.addEventListener("DOMContentLoaded", () => {
  renderBeers();
});

const renderBeers = async () => {
  document.querySelector(".content > .section").innerHTML = "";
  const beers = await fetchUrl(API_BEERS_URL);
  let menuContent = "<ul>";
  beers.forEach((beer) => {
    menuContent += `<li id="menu-item-${beer.id}"><a href="#" class="link">${beer.name}</a></li>`;
  });
  menuContent += "</ul>";
  document.querySelector("#beerList").innerHTML = menuContent;
  addMenuItemEvent(beers);
};

const addMenuItemEvent = (beers) => {
  beers.forEach((beer) => {
    document
      .querySelector(`#menu-item-${beer.id}`)
      .addEventListener("click", () => {
        const content = `<h2>${beer.name}</h2>
        <p><b>Tag Line: </b><span>${beer.tagline}</span></p>
        <p><b>Description: </b><span>${beer.description}</span></p>
        <image class="beer-image" src="${beer.image_url}" />
        `;
        document.querySelector(".content > .section").innerHTML = content;
      });
  });
};

async function fetchUrl(url) {
  const body = await fetch(url);
  return await body.json();
}
