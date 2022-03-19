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

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const displayMatches = (e) => {
  const matches = findPlaceMatches(e.target.value, cities);
  const regex = new RegExp(e.target.value, "gi");
  let htmlToShow;
  if (matches.length !== 0) {
    htmlToShow = matches
      .map((place) => {
        const cityName = place.city.replace(regex, `<span class="highlight">${e.target.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="highlight">${e.target.value}</span>`);
        return `
        <li><div>${cityName}, ${stateName}</div><div>${numberWithCommas(
          place.population
        )}<div></li>
        `;
      })
      .join("");
  } else {
    htmlToShow = "<li>No results...</li>";
  }
  document.querySelector(".places").innerHTML = htmlToShow;
};

const searchInput = document.querySelector(".search");
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
