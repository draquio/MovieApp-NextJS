"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";

const TypeComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleTypeChange = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");
    if (type == " ") {
      params.delete("type");
    } else {
      params.set("type", type);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const types = [
    { name: "Todos", tipo: " " },
    { name: "Películas", tipo: "movie" },
    { name: "Series", tipo: "series" },
    { name: "Juegos", tipo: "game" },
  ];

  return (
    <div>
      <Select onValueChange={handleTypeChange}>
        <SelectTrigger className="bg-[#374151] placeholder:text-[#868686] border-none" aria-label="Seleccionar tipo">
          <SelectValue placeholder="Seleccionar tipo" />
        </SelectTrigger>
        <SelectContent
          ref={(ref) => {
            if (!ref) return;
            ref.ontouchstart = (e) => {
              e.preventDefault();
            };
          }}
        >
          <SelectGroup>
            <SelectLabel>Tipo</SelectLabel>
            {types.map((type, index) => (
              <SelectItem key={index} value={type.tipo}>
                {type.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};

export { TypeComponent };
