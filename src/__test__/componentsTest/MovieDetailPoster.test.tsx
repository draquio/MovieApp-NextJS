import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe, it, expect, vi } from "vitest";
import { MovieDetailPoster } from "@/components/movie/MovieDetailPoster";

vi.mock("@/icons/Icons", () => ({
  StarIcon: () => <span data-testid="StarIcon">StarIcon</span>,
  TrailerIcon: () => <span data-testid="TrailerIcon">TrailerIcon</span>,
  WatchIcon: () => <span data-testid="WatchIcon">WatchIcon</span>,
  WatchLaterIcon: () => (
    <span data-testid="WatchLaterIcon">WatchLaterIcon</span>
  ),
}));
const props = {
    poster: "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    title: "Batman Begins",
  };
describe("MovieDetailPoster Component", () => {
  it("It renders the poster image with the correct src and alt attributes", () => {
    render(<MovieDetailPoster {...props} />);

    const posterImage = screen.getByAltText("Batman Begins");
    expect(posterImage).toHaveAttribute("src", props.poster);
    expect(posterImage).toHaveAttribute("alt", props.title);
  });

  it("it renders the Trailer button and icons", () => {
    render(<MovieDetailPoster {...props} />);
    const trailerButton = screen.getByText("Trailer");
    expect(trailerButton).toBeInTheDocument();
    expect(screen.getByTestId("TrailerIcon")).toBeInTheDocument();
    expect(screen.getByTestId("StarIcon")).toBeInTheDocument();
    expect(screen.getByTestId("WatchIcon")).toBeInTheDocument();
    expect(screen.getByTestId("WatchLaterIcon")).toBeInTheDocument();
  });

  it("renders all text elements (Trailer, Favorito, Ver después, Visto)", () => {
    render(<MovieDetailPoster {...props} />);
    expect(screen.getByText("Trailer")).toBeInTheDocument();
    expect(screen.getByText("Favorito")).toBeInTheDocument();
    expect(screen.getByText("Ver después")).toBeInTheDocument();
    expect(screen.getByText("Visto")).toBeInTheDocument();
  });
});
