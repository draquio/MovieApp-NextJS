import { MovieDetailsInfo } from "@/components/movie/MovieDetailsInfo";
import { MapSingleMovie } from "@/interface/MovieInterface";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

describe("MovieDetailsInfo Component", () => {
  it("it renders movie details correctly", () => {
    const movie: MapSingleMovie = {
      title: "Inception",
      year: "2010",
      rated: "PG-13",
      released: "16 Jul 2010",
      runtime: "148 min",
      genre: "Action, Sci-Fi, Thriller",
      director: "Christopher Nolan",
      plot: "A thief who steals corporate secrets through dream-sharing technology...",
      actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      metascore: "74",
      imdbRating: "8.8",
      imdbVotes: "2,000,000",
      imdbID: "tt1375666",
      type: "movie",
      awards: "Won 4 Oscars. Another 152 wins & 218 nominations.",
    };
    render(<MovieDetailsInfo movie={movie} />);
    expect(screen.getByText(new RegExp(movie.plot, "i"))).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(movie.director, "i"))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(movie.imdbRating, "i"))
    ).toBeInTheDocument();
    expect(
      screen.getByText(new RegExp(movie.released, "i"))
    ).toBeInTheDocument();
    expect(screen.getByText(new RegExp(movie.awards, "i"))).toBeInTheDocument();
    expect(screen.getByText(new RegExp(movie.genre, "i"))).toBeInTheDocument();
  });
});
