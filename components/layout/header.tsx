"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { DesktopNavbar } from "./navbar/desktop";
import { MobileNavbar } from "./navbar/mobile";

export function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#07033A]">
      <nav
        className="container mx-auto flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center gap-2 lg:gap-12">
          <div className="flex lg:hidden">
            <MobileNavbar />
          </div>

          <div className="flex lg:flex flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <Image
                src="/logo.svg"
                alt="logo"
                className="w-8 md:w-12 lg:w-[68px] object-cover"
                width={68}
                height={39}
              />
            </Link>
          </div>

          <DesktopNavbar className="hidden lg:flex lg:gap-x-6" />
        </div>
        <div className="flex items-center gap-x-1 sm:gap-x-4">
          <Button className="bg-[#12294A] text-white uppercase">Login</Button>
          <Button className="bg-[#01AF70] text-white uppercase">
            Registration
          </Button>
        </div>
      </nav>
    </header>
  );
}
