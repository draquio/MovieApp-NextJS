import { FacebookIcon, TwitterIcon } from "@/icons/Icons";
import React from "react";

const MovieDetailSocial = () => {
  return (
    <div className="flex gap-3 tablet:justify-normal justify-center">
      <div className="bg-[#374151] animate-scaleUp flex px-8 rounded-3xl py-3 justify-center items-center gap-1 cursor-pointer hover:bg-[#262c36] transition ease-in-out duration-500">
        <span className="text-xl">
          <TwitterIcon />
        </span>
        <span className="text-xs opacity-60">+2</span>
      </div>
      <div className="bg-[#374151] animate-scaleUp flex px-8 rounded-3xl py-3 justify-center items-center gap-1 cursor-pointer hover:bg-[#262c36] transition ease-in-out duration-500">
        <span className="text-xl">
          <FacebookIcon />
        </span>
        <span className="text-xs opacity-60">+1.5k</span>
      </div>
    </div>
  );
};

export { MovieDetailSocial };
