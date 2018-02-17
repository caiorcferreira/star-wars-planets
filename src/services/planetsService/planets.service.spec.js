jest.mock("../getJson/getJson");

import { getRandomPlanet } from "./planets.service";

import { planetFixture } from "../../tests/fixture/planet.fixture";

describe("fetch a random planet", () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it("should return a planet", async () => {
    const planet = await getRandomPlanet();

    expect(planet).toEqual({ ...planetFixture });
  });
});
