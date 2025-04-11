import Image from "next/image";
import { Grip } from "lucide-react";

import { PROVIDERS } from "./constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

import HotRibbon from "@/shared/images/icons/hot-ribbon.png";
import NewRibbon from "@/shared/images/icons/new-ribbon.png";

export function GamesProvider() {
  return (
    <div className="w-full flex flex-col gap-3 lg:gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-sm lg:text-2xl xl:text-3xl font-medium uppercase">Exclusive Games</h2>
        <Button variant="ghost">
          <span className="hidden md:block text-base">SEE ALL</span>
          <Grip className="lg:!w-5 lg:!h-5" />
        </Button>
      </div>

      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="w-full -ml-3 lg:-ml-6 xl:-ml-9">
          {PROVIDERS.map((provider) => (
            <CarouselItem
              key={provider.id}
              className="!pl-3 lg:!pl-6 xl:!pl-9 basis-1/3 lg:basis-1/8 shadow-lg"
            >
              <div className="relative rounded-lg overflow-hidden">
                <Image
                  src={provider.icon}
                  alt={provider.name}
                  width={100}
                  height={210}
                  className="w-full h-full object-cover"
                />
                {provider.hot && (
                  <Image
                    src={HotRibbon}
                    alt="Hot"
                    width={40}
                    height={40}
                    className="absolute top-2 -left-0.5"
                  />
                )}
                {provider.new && (
                  <Image
                    src={NewRibbon}
                    alt="New"
                    width={40}
                    height={40}
                    className="absolute top-2 -left-0.5"
                  />
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}
