"use client";

import { Text } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { NAVBAR_ITEMS } from "../constant";
import { MobileNavbarItem } from "./item";

export function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          asChild
          className="sm:hidden bg-transparent"
          size="icon"
        >
          <Text className="w-7 h-7 sm:hidden" color="white" />
        </Button>
      </DialogTrigger>

      <DialogContent className="flex flex-col min-w-screen h-full rounded-none">
        <DialogHeader className="h-fit">
          <DialogTitle className="-mt-1"></DialogTitle>
          <DialogDescription hidden>Mobile Navigation</DialogDescription>
        </DialogHeader>

        <nav>
          <ul>
            {NAVBAR_ITEMS.map((item) => (
              <MobileNavbarItem
                key={item.name}
                href={item.href}
                setOpen={setOpen}
              >
                {item.name}
              </MobileNavbarItem>
            ))}
          </ul>
        </nav>
      </DialogContent>
    </Dialog>
  );
}
