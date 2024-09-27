import { MapMovie } from "@/interface/MovieInterface";
import Link from "next/link";

const MovieItem = (props: { movie: MapMovie }) => {
  const { movie } = props;
  const defaultPoster = '/assets/img/NoAvailable.png';
  return (
    <Link className="mx-auto" href={`/movie?id=${movie.imdbID}`}>
      <div className="max-w-[400px] w-full animate-fadeup">
        <img
          src={movie.poster && movie.poster !== 'N/A' ? movie.poster : defaultPoster}
          alt={movie.title}
          className="aspect-[3/4] rounded-md w-full object-cover"
        />
        <h3 className="text-xl max-w-[300px]">{movie.title}</h3>
      </div>
    </Link>
  );
};

export { MovieItem };
