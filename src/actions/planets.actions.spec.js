jest.mock("../services/planetsService/planets.service");

import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  fetchPlanet,
  FETCH_PLANET_BEGIN,
  FETCH_PLANET_SUCCESS
} from "./planets.actions";

const createMockStore = configureMockStore([thunk]);

describe("Planets action generators", () => {
  it("should emit fetch begin", async () => {
    const store = createMockStore({});
    await store.dispatch(fetchPlanet());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: FETCH_PLANET_BEGIN
    });
  });

  it("should fetch random planet", async () => {
    const store = createMockStore({});
    await store.dispatch(fetchPlanet());

    const actions = store.getActions();

    expect(actions[1]).toEqual({
      type: FETCH_PLANET_SUCCESS,
      payload: expect.any(Object)
    });
  });
});
