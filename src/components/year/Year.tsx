"use client";

import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const years = [
  1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992,
  1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005,
  2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018,
  2019, 2020, 2021, 2022, 2023, 2024,
];

const YearComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleYearChange = (year: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (year == " ") {
      params.delete("year");
    } else {
      params.set("year", year);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="relative">
    <Select onValueChange={handleYearChange}>
      <SelectTrigger className="bg-[#374151] placeholder:text-[#868686] border-none">
        <SelectValue placeholder="Seleccionar año" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Selecionar año</SelectLabel>
          <SelectItem value=" ">Sin específicar</SelectItem>
          {years.slice().reverse().map((year, index) => (
            <SelectItem key={index} value={year.toString()}>{year}</SelectItem>
          ))}
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
    </div>
  );
};

export { YearComponent };
