export const FETCH_PLANET_SUCCESS = "FETCH_PLANET_SUCCESS";

const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

export const fetchPlanet = () => {
  return async dispatch => {
    const randomId = getRandomInt(1, 61);

    const json = await fetch(`https://swapi.co/api/planets/${randomId}`).then(
      response => response.json()
    );

    const { name, population, climate, terrain, films } = json;
    dispatch(
      fetchPlanetSuccess({
        name,
        population,
        climate,
        terrain,
        filmsFeatured: films.length
      })
    );
  };
};

export const fetchPlanetSuccess = planet => ({
  type: FETCH_PLANET_SUCCESS,
  payload: { planet }
});
