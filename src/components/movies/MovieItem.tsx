import { MapMovie } from "@/interface/MovieInterface";
import Link from "next/link";

const MovieItem = (props: { movie: MapMovie }) => {
  const { movie } = props;
  return (
    <Link className="mx-auto" href={`/movie?id=${movie.imdbID}`}>
      <div className="w-full animate-fadeup">
        <img
          src={movie.poster}
          alt={movie.title}
          className="aspect-[3/4] rounded-md"
        />
        <h3 className="text-xl max-w-[300px]">{movie.title}</h3>
      </div>
    </Link>
  );
};

export { MovieItem };
