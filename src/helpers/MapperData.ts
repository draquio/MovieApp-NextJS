import { MapMovie, MapSingleMovie } from "@/interface/MovieInterface";
interface IDataFetch {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
interface ISigleDataFetch {
  Title: string
  Year: string
  Rated: string
  Released: string
  Runtime: string
  Genre: string
  Director: string
  Writer: string
  Actors: string
  Plot: string
  Language: string
  Country: string
  Awards: string
  Poster: string
  Metascore: string
  imdbRating: string
  imdbVotes: string
  imdbID: string
  Type: string
  DVD: string
  BoxOffice: string
  Production: string
  Website: string
  Response: string
}


export const MapData = (data:IDataFetch[]): MapMovie[]  => {
  const poster = "/assets/img/NoAvailable.png";
    if(!data) return []
    const mappedData: MapMovie[] = data.map((movie) => ({
        title: movie.Title || "",
        year: movie.Year || "",
        imdbID: movie.imdbID || "",
        type: movie.Type || "",
        poster: movie.Poster && movie.Poster !== "N/A" ? movie.Poster : poster,
    }))
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
    poster: data.Poster || "",
    metascore: data.Metascore || "",
    imdbRating: data.imdbRating || "",
    imdbVotes: data.imdbVotes || "",
    imdbID: data.imdbID || "",
    type: data.Type || "",
    awards: data.Awards || "",
  }
  return mappedData;
}