import { Button } from "@/components/ui/button";
import { Grip } from "lucide-react";
import Image from "next/image";
import { PROVIDERS_LIST } from "./constants";
import Link from "next/link";
import clsx from "clsx";

export function Providers() {
  return (
    <div className="w-full flex flex-col gap-3 lg:gap-8">
      <div className="flex justify-between items-center">
        <h2 className="text-sm lg:text-2xl xl:text-3xl font-medium">ALL PROVIDERS</h2>
        <Button variant="ghost">
          <span className="hidden md:block text-base">SEE ALL</span>
          <Grip className="lg:!w-5 lg:!h-5" />
        </Button>
      </div>

      <div className="flex gap-1.5 lg:gap-3 w-full max-w-7xl mx-auto">
        {PROVIDERS_LIST.map((provider, index) => (
          <div
            key={provider.id}
            className={clsx({
              "flex flex-col items-center gap-3 flex-1 pt-3 bg-[#12294A] rounded-xl overflow-hidden":
                true,
              "hidden lg:flex": index > 2,
            })}
          >
            <div className="relative w-21 h-10">
              <Image
                src={provider.icon}
                alt={provider.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-1 bg-white/10 w-full py-3">
              <Link href="#" className="text-[13px] text-center underline">
                {provider.name}
              </Link>
              <Link
                href="#"
                className="text-[11px] md:text-sm text-center underline text-[#90A2BD]"
              >
                {provider.quantity} games
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
