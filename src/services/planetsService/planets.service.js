import { getJSON } from "../getJson/getJson";
import { getRandomInt } from "../getRandomInt/getRandomInt";

const API_BASE_URL = "https://swapi.co/api";
const MIN_PLANET_ID = 1;
const MAX_PLANET_ID = 61;

const getRandomPlanet = async () => {
  return planetFactory(await getJSON(getPlanetUrl(getRandomPlanetId())));
};

const planetFactory = ({ name, population, climate, terrain, films }) => ({
  name,
  climate,
  terrain,
  population,
  filmsFeatured: films.length
});

const getPlanetUrl = id => `${API_BASE_URL}/planets/${id}/`;

const getRandomPlanetId = () => getRandomInt(MIN_PLANET_ID, MAX_PLANET_ID);

export { getRandomPlanet, API_BASE_URL };
