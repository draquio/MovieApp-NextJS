"use client";
import React, { useState } from "react";
import { KeyboardEvent } from "react";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";

const SearchComponent = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && query != "") {
      e.preventDefault();
      router.push(`search?query=${query}`);
    }
  };
  return (
      <Input
        type="search"
        placeholder="Buscar pelicula o serie"
        value={query}
        className="bg-[#374151] placeholder:text-[white] border-none"
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyPress}
      />
  );
};

export {SearchComponent};
