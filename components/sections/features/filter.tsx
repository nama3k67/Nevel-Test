import { Search } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { FILTERS } from "./constants";

import GameIcon from "@/shared/images/icons/game.png";
import ProvidersIcon from "@/shared/images/icons/providers.png";

export function Filter() {
  return (
    <div className="mt-10 flex items-center justify-end gap-2 xl:gap-3">
      <Button
        variant="outline"
        className="border-white/10 w-28 md:w-40 2xl:w-48 bg-white/10 xl:hidden hover:bg-white/20"
        size="lg"
      >
        <Search className="w-4 h-4" />
        <span className="text-sm">Search</span>
      </Button>

      {FILTERS.map((filter) => (
        <Button
          key={filter.id}
          variant="outline"
          className="border-white/10 w-40 2xl:w-48 hover:border-white/20 hidden xl:flex"
          size="lg"
        >
          <Image src={filter.icon} alt={filter.name} width={24} height={24} />
          <span className="text-sm">{filter.name}</span>
        </Button>
      ))}

      <Button
        variant="outline"
        className="border-white/10 w-28 md:w-40 2xl:w-48 hover:border-white/20 bg-white/10 hover:bg-white/20"
        size="lg"
      >
        <Image
          src={GameIcon}
          alt="Game"
          className="w-4 h-4"
          width={24}
          height={24}
        />
        <span className="text-sm">Games</span>
      </Button>

      <Button
        variant="outline"
        className="border-white/10 w-28 md:w-40 2xl:w-48 hover:border-white/20 bg-white/10 hover:bg-white/20"
        size="lg"
      >
        <Image
          src={ProvidersIcon}
          alt="Providers"
          className="w-4 h-4"
          width={24}
          height={24}
        />
        <span className="text-sm">Providers</span>
      </Button>
    </div>
  );
}
