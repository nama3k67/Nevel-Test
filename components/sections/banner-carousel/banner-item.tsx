import { Info } from "lucide-react";
import Image, { StaticImageData } from "next/image";

import { Button } from "@/components/ui/button";

interface BannerItemProps {
  title: string;
  description: string;
  bgColor: string;
  accentColor: string;
  cta: string;
  icon: StaticImageData;
}

export function BannerItem({
  title,
  description,
  bgColor,
  accentColor,
  cta,
  icon,
}: BannerItemProps) {
  return (
    <div className="flex-[0_0_100%] min-w-0 relative h-[360px]">
      <div className="xl:hidden absolute -top-16 left-1/2 -translate-x-1/2 z-50">
        <Image
          src={icon}
          alt={title}
          className="w-44 h-44 z-50 object-cover"
          width={100}
          height={100}
        />
      </div>
      <div
        className={`rounded-2xl px-6 py-14 xl:py-0 bg-linear-to-b xl:bg-linear-to-r ${bgColor} transition-all duration-300 hover:scale-[1.02] relative shadow-xl h-full flex flex-col justify-end xl:justify-center`}
      >
        <Info size={20} className="absolute top-4 right-4 text-foreground" />
        <div className="flex items-center gap-6">
          <div className="flex flex-col items-center text-center space-y-3 xl:space-y-2 w-full">
            <div className="py-1 px-8 mx-auto w-fit rounded-full bg-primary/10">
              <h2 className={`text-xs xl:text-xl text-white font-semibold ${accentColor}`}>
                {title}
              </h2>
            </div>
            <p className="text-white text-xl xl:text-[42px] font-medium xl:font-bold max-w-md xl:leading-tight">
              {description}
            </p>
            <Button
              className="bg-[#FF0960] hover:bg-[#FF0960]/80 text-white !px-10 xl:!px-16 xl:font-semibold"
              size="lg"
            >
              {cta}
            </Button>
          </div>
          <Image
            src={icon}
            alt={title}
            className="hidden xl:block w-64 h-64 z-50 object-cover"
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  );
}
