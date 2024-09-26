import { MapMovie } from "@/interface/MovieInterface";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { MovieItem } from "@/components/movies/MovieItem";
import "@testing-library/jest-dom";

describe("MovieItem Component", () => {
  it("It renders correctly with given movie data", () => {
    const movie: MapMovie = {
      title: "Batman Begins",
      year: "2005",
      imdbID: "tt0372784",
      type: "movie",
      poster:
        "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    };
    render(<MovieItem movie={movie} />);

    const image = screen.getByAltText("Batman Begins");
    expect(image).toHaveAttribute("src", movie.poster);
    expect(image).toHaveAttribute("alt", "Batman Begins");
    const title = screen.getByText("Batman Begins");
    expect(title).toBeInTheDocument();
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", `/movie?id=${movie.imdbID}`);
  });

  it('renders default image if poster is not available', () => {
    const movie: MapMovie = {
      title: 'Batman Begins',
      year: '2005',
      imdbID: 'tt0372784',
      type: 'movie',
      poster: '',
    };

    render(<MovieItem movie={movie} />);

    const image = screen.getByAltText('Batman Begins');
    expect(image).toHaveAttribute('src', '/assets/img/NoAvailable.png'); // Verifica el fallback
  });
  
  it('renders correctly with valid poster', () => {
    const movie: MapMovie = {
      title: 'Batman Begins',
      year: '2005',
      imdbID: 'tt0372784',
      type: 'movie',
      poster: 'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg', 
    };
    render(<MovieItem movie={movie} />);

    const image = screen.getByAltText('Batman Begins');
    expect(image).toHaveAttribute('src', movie.poster);
  });
});
