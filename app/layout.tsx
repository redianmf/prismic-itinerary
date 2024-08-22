import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { repositoryName } from "@/prismicio";
import { PrismicPreview } from "@prismicio/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Itinerary Prismic",
  description: "Create itinerary with Prismic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
