import { MapData } from "@/helpers/MapperData";
import { MapMovie } from "@/interface/MovieInterface";
import { IDataFetch } from "@/interface/Responses";
import { describe, it, expect } from "vitest";

describe("MapData function from MapperData Helper", () => {
  const posterPlaceholder = "/assets/img/NoAvailable.png";
  it("It should return an empty array if no data is provided", () => {
    const result = MapData([]);
    expect(result).toEqual([]);
  });

  it("It should map data correctly when valid data is provided", () => {
    const data: IDataFetch[] = [
      {
        Title: "Inception",
        Year: "2010",
        imdbID: "tt1375666",
        Type: "movie",
        Poster: "https://example.com/inception.jpg",
      },
    ];
    const expected: MapMovie[] = [
      {
        title: "Inception",
        year: "2010",
        imdbID: "tt1375666",
        type: "movie",
        poster: "https://example.com/inception.jpg",
      },
    ];
    const result = MapData(data);
    expect(result).toEqual(expected);
  });

  it("It should use placeholder image if poster is not available", () => {
    const data: IDataFetch[] = [
      {
        Title: "Unknown Movie",
        Year: "2020",
        imdbID: "tt1234567",
        Type: "movie",
        Poster: "N/A",
      },
    ];
    const expected: MapMovie[] = [
      {
        title: "Unknown Movie",
        year: "2020",
        imdbID: "tt1234567",
        type: "movie",
        poster: posterPlaceholder,
      },
    ];

    const result = MapData(data);
    expect(result).toEqual(expected);
  });

  it('It should handle missing data fields and default to empty strings', () => {
    const data: IDataFetch[] = [
      {
        Title: '',
        Year: '',
        imdbID: '',
        Type: '',
        Poster: '', // Campo póster vacío
      },
    ];
    const expected: MapMovie[] = [
      {
        title: '',
        year: '',
        imdbID: '',
        type: '',
        poster: posterPlaceholder, // Usa la imagen por defecto
      },
    ];

    const result = MapData(data);
    expect(result).toEqual(expected);
  });
});
