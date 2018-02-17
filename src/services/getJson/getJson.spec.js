import fetchMock from "fetch-mock";

import { getJSON } from "./getJson";

const syncify = async fn => {
  try {
    const result = await fn();
    return () => {
      return result;
    };
  } catch (e) {
    return () => {
      throw e;
    };
  }
};

describe("JSON fetching", () => {
  it("should fetch JSON data", async () => {
    const url = "http://some.url/api/";
    const response = { data: "test" };
    fetchMock.get(url, response);

    const json = await getJSON(url);
    expect(json).toEqual(response);
  });

  it("should thrown HTTP error", async () => {
    const url = "http://bad.url/api/";
    fetchMock.get(url, {
      status: 400
    });

    const outcome = await syncify(async () => {
      return await getJSON(url);
    });
    expect(outcome).toThrow();
  });
});
