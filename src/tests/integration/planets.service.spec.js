import { getRandomPlanet } from "../../services/planetsService/planets.service";

describe("Integration with Star Wars API", () => {
  it("should fetch a planet from API", async () => {
    const planet = await getRandomPlanet();

    expect(planet).toEqual({
      name: expect.any(String),
      climate: expect.any(String),
      terrain: expect.any(String),
      population: expect.any(String),
      filmsFeatured: expect.any(Number)
    });
  });
});
