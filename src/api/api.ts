import { MapData, MapSingleFullData } from "@/helpers/MapperData";
import { MapMovie, MapSingleMovie } from "@/interface/MovieInterface";
import { ENV } from "@/utils/constants";

export const getActualMovies = async (year:string, type:string, page:string, title:string): Promise<MapMovie[]> => {
  try {
    const url = `${ENV.API_URL}?s=${title}&y=${year}&type=${type}&page=${page}&apikey=${ENV.API_KEY}`;
    const response = await fetch(url);
    if(response.status === 200){
      const result = await response.json();
      const mappedData = MapData(result.Search);
      return mappedData;
    }
    throw response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error al obtener las películas:", error.message);
      return [];
    } else {
      console.error("Error desconocido:", error);
      return [];
    }
  }
};

export const searchMovie = async (year:string, type:string, page:string, title:string): Promise<MapMovie[]> => {
  try {
    const url = `${ENV.API_URL}?s=${title}&y=${year}&type=${type}&page=${page}&apikey=${ENV.API_KEY}`;
    const response = await fetch(url);
    if(response.status === 200){
      const result = await response.json();
      const mappedData = MapData(result.Search);
      return mappedData;
    }
    throw response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error al obtener las películas:", error.message);
      return [];
    } else {
      console.error("Error desconocido:", error);
      return [];
    }
  }
};

export const getMovieById = async (id: string): Promise<MapSingleMovie | null> => {
  try {
    const url = `${ENV.API_URL}?i=${id}&plot=full&apikey=${ENV.API_KEY}`;
    const response = await fetch(url);
    if(response.status === 200){
      const result = await response.json();
      const mappedData = MapSingleFullData(result);
      return mappedData;
    }
    throw response;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error al obtener las películas:", error.message);
      return null;
    } else {
      console.error("Error desconocido:", error);
      return null;
    }
  }
};
