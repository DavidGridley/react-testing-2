import React from "react";
import MovieResults from "../../src/components/MovieResults";
import renderer from "react-test-renderer";

describe("MovieResults", () => {
  test("matches the snapshot", () => {
    const tree = renderer
      .create(
        <MovieResults
          movies={[
            { Title: "pulp fiction", Year: "1995", Poster: "N/A", imdbID: "1" },
            { Title: "another film", Year: "1996", Poster: "N/A", imdbID: "2" },
            { Title: "another film", Year: "1996", Poster: "N/A", imdbID: "3" }
          ]}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
