import { MapMovie } from "@/interface/MovieInterface";
import { MovieItem } from "./MovieItem";

const Movie = (props: { data: MapMovie[] }) => {
  const { data } = props;
  return (
    <div
      className="grid gap-x-8 gap-y-3 w-full"
      style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
    >
      {data.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </div>
  );
};

export { Movie };
