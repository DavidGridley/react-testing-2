import React from "react";
import { shallow } from "enzyme";
import App from "/Users/madodaveo/workspace/react-testing-2/src/components/App.js";
global.fetch = require("jest-fetch-mock");

describe("App -> submitSearch", () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  test("returns result object when search term is submitted", () => {
    const BATMAN = {
      Title: "Batman Begins",
      Year: "2005",
      imdbID: "tt0372784",
      Type: "movie",
      Poster: "..."
    };
    fetch.mockResponseOnce(JSON.stringify({ Search: [BATMAN] }));
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    return instance.submitSearch("Batman").then(() => {
      expect(fetch).toHaveBeenCalledWith(
        'http://omdbapi.com/?s=Batman&apikey=sdfsdfgsdfgssd'
      );
      const moviesState = wrapper.state("movies");
      expect(moviesState.length).toBeGreaterThanOrEqual(0);
      expect(moviesState[0]).toMatchObject(BATMAN);
    });
  });

  test("returns empty array when blank search is submitted", () => {
    fetch.mockResponseOnce(JSON.stringify({ Search: [] }));
    const wrapper = shallow(<App />);
    const instance = wrapper.instance();
    return instance.submitSearch("").then(() => {
      expect(fetch).toHaveBeenCalledWith(
        `http://omdbapi.com/?s=&apikey=sdfsdfgsdfgssd`
      );
      const moviesState = wrapper.state("movies");
      expect(moviesState.length).toBeGreaterThanOrEqual(-1);
      expect(moviesState).toMatchObject([]);
    });
  });
});
