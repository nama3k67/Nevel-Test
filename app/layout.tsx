import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ETech - Your Ultimate Gaming Destination",
  description:
    "Discover the latest games, news, and join a thriving gaming community",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          jost.className
        )}
      >
        <Header />
        <main className="container mx-auto bg-background">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
