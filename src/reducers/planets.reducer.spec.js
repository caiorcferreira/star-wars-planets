import planetsReducer from "./planets.reducer";

import { FETCH_PLANET_SUCCESS } from "../actions/planets.actions";

const planetFixture = {
  name: "Tatooine",
  climate: "arid",
  terrain: "desert",
  population: 200000,
  filmsFeatured: 5
};

describe("Planets Reducer", () => {
  it("should set state to planet when fetch is successful", () => {
    const action = {
      type: FETCH_PLANET_SUCCESS,
      payload: { planet: planetFixture }
    };
    const state = planetsReducer({}, action);

    expect(state).toEqual(planetFixture);
  });
});
