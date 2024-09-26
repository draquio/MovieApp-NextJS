"use client"
import React from "react";
import { TypeComponent } from "../type/Type";
import { YearComponent } from "../year/Year";
import { SearchComponent } from "../search/Search";
import { usePathname } from "next/navigation";

const NavComponent = () => {
  const pathname = usePathname();
  const linkClass = pathname == '/movie' ? 'hidden' : 'md:flex';
  return (
    <div className="flex flex-col gap-2 my-8 animate-fade">
      <SearchComponent />
      <div className={`${linkClass} justify-end grid grid-cols-2 gap-4 `}>
        <YearComponent />
        <TypeComponent />
      </div>
    </div>
  );
};

export { NavComponent };
