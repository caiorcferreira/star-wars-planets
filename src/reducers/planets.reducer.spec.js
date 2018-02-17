import planetsReducer from "./planets.reducer";

import { planetFixture } from "../tests/fixture/planet.fixture";

import {
  FETCH_PLANET_SUCCESS,
  FETCH_PLANET_BEGIN
} from "../actions/planets.actions";

describe("Planets Reducer", () => {
  it("should set planet data when fetch is successful", () => {
    const action = {
      type: FETCH_PLANET_SUCCESS,
      payload: { planet: planetFixture }
    };
    const state = planetsReducer({}, action);

    expect(state.data).toEqual(planetFixture);
  });

  it("should set loading flag when fetch begin", () => {
    const action = {
      type: FETCH_PLANET_BEGIN
    };
    const state = planetsReducer({}, action);

    expect(state.loading).toBeTruthy();
  });
});
