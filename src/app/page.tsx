import { getActualMovies } from "@/api/api";
import {Movie} from "@/components/movies/Movie";
import { NavComponent } from "@/components/nav/NavComponent";
// import { PaginationComponent } from "@/components/pagination/Pagination";

interface Props {
  searchParams: { year: string; type: string, page: string };
}
const Home = async ({ searchParams }: Props) => {
  const year = searchParams.year || "";
  const type = searchParams.type || "";
  const page = searchParams.page || "1";
  const data = await getActualMovies(year, type, page, "batman");

  return (
    <div className="">
      <NavComponent />
      <Movie data={data} />
      {/* <PaginationComponent /> */}
    </div>
  );
};

export default Home;
