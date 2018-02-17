const mockMath = Object.create(global.Math);

import { getRandomInt } from "./getRandomInt";

describe("get a random integer", () => {
  it("should generate a number in the middle of the range", () => {
    mockMath.random = () => 0.5;
    global.Math = mockMath;

    const random = getRandomInt(1, 61);
    expect(random).toBe(31);
  });

  it("should generate the minimun value", () => {
    mockMath.random = () => 0;
    global.Math = mockMath;

    const random = getRandomInt(1, 61);
    expect(random).toBe(1);
  });

  it("should generate the maximum value", () => {
    mockMath.random = () => 0.99;
    global.Math = mockMath;

    const random = getRandomInt(1, 61);
    expect(random).toBe(61);
  });
});
