import {
    StarIcon,
    TrailerIcon,
    WatchIcon,
    WatchLaterIcon,
  } from "@/icons/Icons";
const MovieDetailPoster = (props:{poster:string}) => {
    const {poster} = props;
  return (
    <>
        <img
          src={poster}
          className="w-full max-w-[300px] tablet:min-w-[300px] min-w-[200px] min-w- rounded-xl animate-blur"
        />
        <button className=" animate-fadeup w-full bg-[#374151] hover:bg-[#262c36] rounded-3xl py-3 transition ease-in-out duration-500 flex justify-center items-center gap-1">
          <span className="text-xl">
            <TrailerIcon />
          </span>
          <span className="font-bold">Trailer</span>
        </button>
        <div className="grid grid-cols-3 mt-3 animate-fadeup">
          <div className="flex flex-col justify-center items-center gap-y-4 cursor-pointer">
            <span className="text-2xl text-[#03c1ef]">
              <StarIcon />
            </span>
            <span>Favorito</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4 cursor-pointer">
            <span className="text-2xl">
              <WatchLaterIcon />
            </span>
            <span>Ver después</span>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-4 cursor-pointer">
            <span className="text-2xl">
              <WatchIcon />
            </span>
            <span>Visto</span>
          </div>
        </div>
    </>
  )
}

export {MovieDetailPoster}
