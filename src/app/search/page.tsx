
import { searchMovie } from "@/api/api";
import { Movie } from "@/components/movies/Movie";
import { NavComponent } from "@/components/nav/NavComponent";
import { PaginationComponent } from "@/components/pagination/Pagination";
import { MapMovie } from "@/interface/MovieInterface";
interface Props {
  searchParams: { query?: string; year: string; page: string; type: string }
}

const SearchPage = async ({ searchParams }: Props) => {
  const query = searchParams.query || "valor por defecto";
  const year = searchParams.year || "";
  const type = searchParams.type || "";
  const page = searchParams.page || "1";
  const data: MapMovie[] = await searchMovie(year, type, page, query);
  
  return (
    <div className="w-full max-w-[1200px] mx-auto">
        <NavComponent />
        <Movie data={data} />
        {data.length > 0 ? <PaginationComponent /> : <p className="text-center w-full">No hay resultados</p>}
    </div>
  );
};

export default SearchPage;
