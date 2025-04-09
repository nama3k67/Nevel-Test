"use client";

import Link from "next/link";
interface MobileNavbarItemProps {
  href: string;
  children: React.ReactNode;
  setOpen: (open: boolean) => void;
}

export function MobileNavbarItem({
  children,
  href,
  setOpen,
}: MobileNavbarItemProps) {
  const handleClick = () => {
    setOpen(false);
  };

  return (
    <li className="h-16 flex items-center justify-center text-sm uppercase font-bold not-last:border-b border-gray-50/50">
      <Link href={`#${href}`} onClick={handleClick}>
        {children}
      </Link>
    </li>
  );
}