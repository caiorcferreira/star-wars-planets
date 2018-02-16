import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

import {
  fetchPlanet,
  FETCH_PLANET_BEGIN,
  FETCH_PLANET_SUCCESS
} from "./planets.actions";

const createMockStore = configureMockStore([thunk]);

describe("Planets action generators", () => {
  it("should fetch random planet", async () => {
    const store = createMockStore({});
    await store.dispatch(fetchPlanet());

    const actions = store.getActions();

    expect(actions[0]).toEqual({
      type: FETCH_PLANET_SUCCESS,
      payload: expect.any(Object)
    });
  });
});
