import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";


const brandfont = Manrope({subsets: ["latin"]})

export const metadata: Metadata = {
  title: "Medirevs",
  description: "Revolutionizing Healthcare with Cutting-Edge AI Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={brandfont.className}
      >

        {children}
      </body>
    </html>
  );
}
