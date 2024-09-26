import { MapSingleMovie } from "@/interface/MovieInterface";
import React from "react";

const MovieDetailsInfo = (props: { movie: MapSingleMovie }) => {
  const { movie } = props;
  return (
    <div className="animate-fadeup">
      <div className="flex laptop:flex-row flex-col gap-4">
        <div className="laptop:w-[70%] w-full">
          <h2 className="text-xl">Historia</h2>
          <p>{movie.plot}</p>
        </div>
        <hr className="h-full w-1 border-t-0 border-l-[1px] transform md:rotate-0 rotate-90 mx-4 opacity-30 laptop:block hidden" />
        <div className="laptop:w-[30%] w-full">
          <h2 className="text-xl">Dirigido por</h2>
          <p>{movie.director}</p>
        </div>
      </div>
      <div>
        <p>
          <b>Rating:</b> <span>{movie.imdbRating}</span>
        </p>
        <p>
          <b>Estreno:</b> <span>{movie.released}</span>
        </p>
        <p>
          <b>Premios:</b> <span>{movie.awards}</span>
        </p>
        <p>
          <b>Géneros:</b> <span>{movie.genre}</span>
        </p>
      </div>
    </div>
  );
};

export {MovieDetailsInfo};
