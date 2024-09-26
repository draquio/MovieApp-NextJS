
import { MapSingleMovie } from "@/interface/MovieInterface";
import { MovieDetailPoster } from "./MovieDetailPoster";
import { MovieDetailsInfo } from "./MovieDetailsInfo";
import { MovieDetailSocial } from "./MovieDetailSocial";
const MovieDetail = (props: { movie: MapSingleMovie }) => {
  const { movie } = props;
  return (
    <div className="flex tablet:flex-row flex-col gap-12">
      <div className="w-full max-w-[300px] flex flex-col gap-4 tablet:mx-0 mx-auto">
        <MovieDetailPoster poster={movie.poster} />
      </div>
      <div className="flex flex-col tablet:gap-8 gap-5">
        <h1 className="text-3xl font-bold animate-fadeup">{movie.title}</h1>
        <MovieDetailsInfo movie={movie} />
        <hr className="opacity-30"></hr>
        <MovieDetailSocial />
      </div>
    </div>
  );
};

export { MovieDetail };
