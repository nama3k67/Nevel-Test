import Link from "next/link";

interface DesktopNavbarItemProps {
  children: React.ReactNode;
  href: string;
}

export function DesktopNavbarItem({ children, href }: DesktopNavbarItemProps) {
  return (
    <Link
      key={href}
      href={href}
      className="text-sm font-semibold leading-6 text-foreground hover:text-primary uppercase"
    >
      {children}
    </Link>
  );
}
