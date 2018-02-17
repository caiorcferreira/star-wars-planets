export const FETCH_PLANET_BEGIN = "FETCH_PLANET_BEGIN";
export const FETCH_PLANET_SUCCESS = "FETCH_PLANET_SUCCESS";
export const FETCH_PLANET_FAILURE = "FETCH_PLANET_FAILURE";

const getRandomInt = (min, max) => {
  const minInt = Math.ceil(min);
  const maxInt = Math.floor(max);
  return Math.floor(Math.random() * (maxInt - minInt + 1)) + minInt;
};

const handleHtppErrors = response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
};

export const fetchPlanet = () => {
  return async dispatch => {
    const randomId = getRandomInt(1, 61);

    dispatch(fetchPlanetBegin());
    try {
      const json = await fetch(`https://swapi.co/api/planets/${randomId}`)
        .then(handleHtppErrors)
        .then(response => response.json());
    } catch (error) {
      dispatch(fetchPlanetFailure());
    }

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

export const fetchPlanetBegin = () => ({
  type: FETCH_PLANET_BEGIN
});

export const fetchPlanetFailure = () => ({
  type: FETCH_PLANET_SUCCESS
});
