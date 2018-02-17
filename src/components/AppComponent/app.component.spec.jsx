import React from "react";
import { shallow } from "enzyme";

import { App } from "./app.component";

import { planetFixture } from "../../tests/fixture/planet.fixture";

describe("Application component", () => {
  let fetchPlanet, planet;
  beforeEach(() => {
    fetchPlanet = jest.fn();
    planet = {
      data: planetFixture,
      loading: false,
      error: null
    };
  });

  it("should render component with planet", () => {
    const wrapper = shallow(<App fetchPlanet={fetchPlanet} planet={planet} />);

    expect(wrapper).toMatchSnapshot();
  });

  it("should render component loading", () => {
    const wrapper = shallow(
      <App fetchPlanet={fetchPlanet} planet={{ ...planet, loading: true }} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it("should render error", () => {
    const wrapper = shallow(
      <App
        fetchPlanet={fetchPlanet}
        planet={{ ...planet, error: "Not found" }}
      />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
