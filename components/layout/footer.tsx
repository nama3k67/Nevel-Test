import Image from "next/image";
import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { FOOTER_ACCORDIONS, FOOTER_SOCIALS } from "./constants";

import AndroidIcon from "@/shared/images/icons/android.png";
import AppleIcon from "@/shared/images/icons/apple.png";

export function Footer() {
  const renderSocials = () => {
    return FOOTER_SOCIALS.map((social) => (
      <Link
        key={social.id}
        href={social.url}
        className="text-white/70 hover:text-white"
      >
        <Image src={social.icon} alt={social.name} width={32} height={32} />
      </Link>
    ));
  };

  return (
    <footer className="bg-[#12294A] text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 xl:gap-24">
          <div className="hidden lg:flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <h3 className="font-medium text-2xl">Help Center</h3>
              <p className="text-white/70 text-xs">
                If you have any questions?
              </p>
            </div>

            <Button className="bg-[#3555FF] hover:bg-[#3555FF]/80 text-white text-xs">
              GET ANSWERS
            </Button>

            <div className="flex justify-between mt-4">{renderSocials()}</div>
          </div>

          <div className="flex flex-col gap-12 lg:hidden">
            <Accordion type="single" collapsible className="w-full">
              {FOOTER_ACCORDIONS.map((accordion) => (
                <AccordionItem
                  key={accordion.id}
                  value={accordion.title}
                  className="border-none bg-[#1A3157] mb-4 rounded-xl px-4"
                >
                  <AccordionTrigger className="font-medium">
                    {accordion.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-3.5">
                      {accordion.content.map((item, index) => (
                        <li key={index}>
                          <Link
                            href="#"
                            className="text-white/70 hover:text-white"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="col-span-3 hidden lg:grid grid-cols-3 gap-1">
            {FOOTER_ACCORDIONS.map((accordion) => (
              <div key={accordion.id} className="space-y-4">
                <h3 className="text-lg font-medium">{accordion.title}</h3>
                <ul className="space-y-2 lg:space-y-4">
                  {accordion.content.map((item, index) => (
                    <li key={index}>
                      <Link href="#" className="text-white/70 hover:text-white">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex lg:hidden flex-col items-center gap-4">
            <h3 className="font-medium">Follow Us</h3>
            <div className="flex gap-10">{renderSocials()}</div>
          </div>

          <div className="grid lg:hidden grid-cols-2 gap-x-2 gap-y-4 mt-10">
            <div className="flex justify-between items-center col-span-2 px-4 py-4 bg-[#1A3157] rounded-[10px]">
              <div className="flex flex-col">
                <h3 className="font-medium">Help Center</h3>
                <p className="text-white/70 text-xs">
                  If you have any questions?
                </p>
              </div>

              <Button className="bg-[#3555FF] hover:bg-[#3555FF]/80 text-white text-xs">
                GET ANSWERS
              </Button>
            </div>
            <div className="flex justify-center items-center bg-[#1A3157] rounded-[10px] px-2 py-2">
              <Image src={AndroidIcon} alt="Android" width={40} height={40} />
              <div className="flex flex-col">
                <h3 className="font-medium text-[15px]">Bluechip App</h3>
                <p className="text-xs text-white/70">for Android</p>
              </div>
            </div>
            <div className="flex justify-center items-center bg-[#1A3157] rounded-[10px] px-2 py-2">
              <Image src={AppleIcon} alt="Apple" width={40} height={40} />
              <div className="flex flex-col">
                <h3 className="font-medium text-[15px]">Bluechip App</h3>
                <p className="text-xs text-white/70">for IOS</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-x-2 gap-y-4 h-fit">
            <div className="col-span-2 flex justify-center items-center bg-[#1A3157] rounded-[10px] px-2 py-2">
              <Image src={AppleIcon} alt="Apple" width={40} height={40} />
              <div className="flex flex-col text-[15px]">
                <h3 className="font-medium ">Bluechip App</h3>
                <p>for MacOS</p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-[#1A3157] rounded-[10px] px-2 py-2">
              <Image src={AndroidIcon} alt="Android" width={40} height={40} />
              <div className="flex flex-col">
                <h3 className="font-medium text-[15px] sr-only">
                  Bluechip App
                </h3>
                <p className="text-xs text-white/70">Android</p>
              </div>
            </div>
            <div className="flex flex-col items-center bg-[#1A3157] rounded-[10px] px-2 py-2">
              <Image src={AppleIcon} alt="Apple" width={40} height={40} />
              <div className="flex flex-col">
                <h3 className="font-medium text-[15px] sr-only">
                  Bluechip App
                </h3>
                <p className="text-xs text-white/70">IOS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
