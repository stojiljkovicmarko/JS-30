const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const cities = [];

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

const findPlaceMatches = (textToFind, cities) => {
  return cities.filter((place) => {
    const regex = new RegExp(textToFind, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
};

const displayMatches = (e) => {
  const matches = findPlaceMatches(e.target.value, cities);
  const htmlToShow = matches.map(
    (place) => `
    <li>${place.city}, ${place.state}</li>
    `).join("");
  document.querySelector(".places").innerHTML = htmlToShow;
};

const searchInput = document.querySelector(".search");
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
