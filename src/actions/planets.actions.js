export const FETCH_PLANET_BEGIN = "FETCH_PLANET_BEGIN";
export const FETCH_PLANET_SUCCESS = "FETCH_PLANET_SUCCESS";
export const FETCH_PLANET_FAILURE = "FETCH_PLANET_FAILURE";

import { getRandomPlanet } from "../services/planetsService/planets.service";

export const fetchPlanet = () => {
  return async dispatch => {
    try {
      dispatch(fetchPlanetBegin());
      const planet = await getRandomPlanet();
      dispatch(fetchPlanetSuccess(planet));
    } catch (error) {
      dispatch(fetchPlanetFailure());
    }
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
