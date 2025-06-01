import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";


const brandfont = Open_Sans({subsets: ["latin"]})

export const metadata: Metadata = {
  title: 'Medirevs',
  description: 'Medirevs transforms Ghana\'s healthcare with quantum-powered AI, predictive analytics, and intelligent EHR systems. Experience the future of healthcare technology across 50+ facilities.',
  keywords: 'AI healthcare Ghana, quantum medical technology, predictive health analytics, intelligent EHR Ghana, telemedicine AI, healthcare innovation Africa, medical AI solutions, smart healthcare Ghana',
  authors: [{ name: 'Medirevs AI' }],
  creator: 'Medirevs',
  publisher: 'Medirevs',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://medirevs.com',
    siteName: 'Medirevs',
    title: 'Medirevs - AI-Powered Healthcare Revolution in Ghana',
    description: 'Revolutionizing healthcare with quantum-powered AI solutions that predict, prevent, and transform patient outcomes across Ghana.',
    images: [
      {
        url: '/og-image-ai.jpg',
        width: 1200,
        height: 630,
        alt: 'Medirevs - AI Healthcare Revolution in Ghana',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Medirevs - AI Healthcare Revolution',
    description: 'Quantum-powered healthcare AI transforming lives across Ghana.',
  },
 
}

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
        <Footer/>
      </body>
    </html>
  );
}
