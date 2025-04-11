"use client";

import { useEffect, useState } from "react";

import {
  Carousel3D,
  Carousel3DContent,
  Carousel3DItem,
  Carousel3DNext,
  Carousel3DPrevious,
  type CarouselApi,
} from "@/components/ui/carousel-3d";
import { BannerItem } from "../banner-carousel/banner-item";
import { banners } from "../banner-carousel/constants";

export function BannerCarousel3D() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(1);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
    
    // Set the initial slide to the second item (index 1)
    api.scrollTo(1);
  }, [api]);

  return (
    <section className="relative w-full pt-10 lg:py-12">
      <div className="container px-4 mx-auto">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* This creates a mask effect to show only parts of side items */}
            <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent"></div>
            <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent"></div>
          </div>
          
          <Carousel3D
            opts={{
              align: "center",
              loop: true,
            }}
            setApi={setApi}
            className="overflow-visible"
          >
            <Carousel3DContent className="overflow-visible pt-20">
              {banners.map((banner, index) => (
                <Carousel3DItem 
                  key={banner.id} 
                  className={`lg:basis-1/2 transition-all duration-300 ${
                    current === index ? 'opacity-100' : 'opacity-50'
                  }`}
                >
                  <BannerItem {...banner} />
                </Carousel3DItem>
              ))}
            </Carousel3DContent>
            <Carousel3DPrevious />
            <Carousel3DNext />
            <div className="flex lg:hidden justify-center gap-2 mt-4">
              {banners.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    current === index ? "bg-primary w-4" : "bg-primary/50"
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
          </Carousel3D>
        </div>
      </div>
    </section>
  );
} 