import { MapMovie, MapSingleMovie } from "@/interface/MovieInterface";
import { IDataFetch, ISigleDataFetch } from "@/interface/Responses";


const poster = "/assets/img/NoAvailable.png";
export const MapData = (data:IDataFetch[]): MapMovie[]  => {
    if(!data) return []
    const mappedData: MapMovie[] = data.map((movie) => ({
        title: movie.Title || "",
        year: movie.Year || "",
        imdbID: movie.imdbID || "",
        type: movie.Type || "",
        poster: movie.Poster && movie.Poster !== "N/A" ? movie.Poster : poster,
    }));
    return mappedData;
};

export const MapSingleFullData = (data: ISigleDataFetch): MapSingleMovie => {
  const mappedData: MapSingleMovie = {
    title: data.Title || "",
    year: data.Year || "",
    rated: data.Rated || "",
    released: data.Released || "",
    runtime: data.Runtime || "",
    genre: data.Genre || "",
    director: data.Director || "",
    plot: data.Plot || "",
    actors: data.Actors || "",
    poster: data.Poster && data.Poster !== "N/A" ? data.Poster : poster,
    metascore: data.Metascore || "",
    imdbRating: data.imdbRating || "",
    imdbVotes: data.imdbVotes || "",
    imdbID: data.imdbID || "",
    type: data.Type || "",
    awards: data.Awards || "",
  }
  return mappedData;
}