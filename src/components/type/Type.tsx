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
    if (type == " ") {
      params.delete("type");
    } else {
      params.set("type", type);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const types = [
    { name: "Películas", tipo: "movie" },
    { name: "Series", tipo: "series" },
    { name: "Ambos", tipo: " " },
  ];

  return (
    <div className="relative">
      <Select onValueChange={handleTypeChange}>
        <SelectTrigger className="bg-[#374151] placeholder:text-[#868686] border-none">
          <SelectValue placeholder="Selecionar tipo" />
        </SelectTrigger>
        <SelectContent className="">
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

export {TypeComponent};
