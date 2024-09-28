import { MapSingleFullData } from "@/helpers/MapperData";
import { MapSingleMovie } from "@/interface/MovieInterface";
import { ISigleDataFetch } from "@/interface/Responses";
import { describe, it, expect } from "vitest";

describe("MapSingleFullData function from MapperData Helper", () => {
  it("should map data correctly when valid data is provided", () => {
    const data: ISigleDataFetch = {
      Title: "Inception",
      Year: "2010",
      Rated: "PG-13",
      Released: "16 Jul 2010",
      Runtime: "148 min",
      Genre: "Action, Sci-Fi, Thriller",
      Director: "Christopher Nolan",
      Writer: "Christopher Nolan",
      Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
      Plot: "A thief who steals corporate secrets...",
      Language: "English",
      Country: "USA",
      Awards: "Won 4 Oscars. Another 152 wins & 218 nominations.",
      Poster: "https://example.com/inception.jpg",
      Metascore: "74",
      imdbRating: "8.8",
      imdbVotes: "2,000,000",
      imdbID: "tt1375666",
      Type: "movie",
      DVD: "N/A",
      BoxOffice: "$829,895,144",
      Production: "Syncopy",
      Website: "N/A",
      Response: "True",
    };
    const expected: MapSingleMovie = {
      title: "Inception",
      year: "2010",
      rated: "PG-13",
      released: "16 Jul 2010",
      runtime: "148 min",
      genre: "Action, Sci-Fi, Thriller",
      director: "Christopher Nolan",
      plot: "A thief who steals corporate secrets...",
      actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
      poster: "https://example.com/inception.jpg",
      metascore: "74",
      imdbRating: "8.8",
      imdbVotes: "2,000,000",
      imdbID: "tt1375666",
      type: "movie",
      awards: "Won 4 Oscars. Another 152 wins & 218 nominations.",
    };

    const result = MapSingleFullData(data);
    expect(result).toEqual(expected);
  });

  it('should handle missing data fields and default to empty strings', () => {
    const data: ISigleDataFetch = {
      Title: '',
      Year: '',
      Rated: '',
      Released: '',
      Runtime: '',
      Genre: '',
      Director: '',
      Writer: '',
      Actors: '',
      Plot: '',
      Language: '',
      Country: '',
      Awards: '',
      Poster: '',
      Metascore: '',
      imdbRating: '',
      imdbVotes: '',
      imdbID: '',
      Type: '',
      DVD: '',
      BoxOffice: '',
      Production: '',
      Website: '',
      Response: '',
    };
    const expected: MapSingleMovie = {
      title: '',
      year: '',
      rated: '',
      released: '',
      runtime: '',
      genre: '',
      director: '',
      plot: '',
      actors: '',
      poster: '/assets/img/NoAvailable.png',
      metascore: '',
      imdbRating: '',
      imdbVotes: '',
      imdbID: '',
      type: '',
      awards: '',
    };

    const result = MapSingleFullData(data);
    expect(result).toEqual(expected);
  });

  it('should correctly map data even with some missing fields', () => {
    const data: ISigleDataFetch = {
      Title: 'Inception',
      Year: '2010',
      Rated: 'PG-13',
      Released: '',
      Runtime: '',
      Genre: '',
      Director: '',
      Writer: '',
      Actors: '',
      Plot: '',
      Language: '',
      Country: '',
      Awards: '',
      Poster: '',
      Metascore: '',
      imdbRating: '8.8',
      imdbVotes: '',
      imdbID: 'tt1375666',
      Type: 'movie',
      DVD: '',
      BoxOffice: '',
      Production: '',
      Website: '',
      Response: '',
    };
    const expected: MapSingleMovie = {
      title: 'Inception',
      year: '2010',
      rated: 'PG-13',
      released: '',
      runtime: '',
      genre: '',
      director: '',
      plot: '',
      actors: '',
      poster: '/assets/img/NoAvailable.png',
      metascore: '',
      imdbRating: '8.8',
      imdbVotes: '',
      imdbID: 'tt1375666',
      type: 'movie',
      awards: '',
    };

    const result = MapSingleFullData(data);
    expect(result).toEqual(expected);
  });
});
