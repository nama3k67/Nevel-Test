import { ComponentPropsWithoutRef } from "react";

import { NAVBAR_ITEMS } from "../constant";
import { DesktopNavbarItem } from "./item";
import { Search } from "lucide-react";

export function DesktopNavbar({ ...props }: ComponentPropsWithoutRef<"div">) {
  return (
    <div {...props}>
      <Search className="text-white" />
      {NAVBAR_ITEMS.map((item) => (
        <DesktopNavbarItem key={item.name} href={item.href}>
          {item.name}
        </DesktopNavbarItem>
      ))}
    </div>
  );
}
