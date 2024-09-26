import type { Metadata } from "next";

import "./globals.css";
import { HeaderComponent } from "@/components/common/Header";
import { FooterComponent } from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Movie Web App - Ing. Sergio Mercado",
  description: "Web de películas y series online realizado con NextJS y Tailwind por Ing. Sergio Mercado",
  openGraph: {
    title: 'Movie Web App - Ing. Sergio Mercado',
    description: 'Web de películas y series online realizado con NextJS y Tailwind por Ing. Sergio Mercado',
    siteName: 'Movie Web App',
    images: [
      {
        url: 'movie_m.webp', 
        width: 800,
        height: 600,
        alt: "Movie Web App - Ing. Sergio Mercado"
      },
      {
        url: 'movie_b.webp',
        width: 1800,
        height: 1600,
        alt: 'Movie Web App - Ing. Sergio Mercado',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Movie Web App - Ing. Sergio Mercado',
    description: 'Web de películas y series online realizado con NextJS y Tailwind por Ing. Sergio Mercado',
    creator: 'Ing. Sergio Mercado',
    images: ['movie_m.webp'], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#192026] text-white flex flex-col min-h-dvh">
        <HeaderComponent />
        <main className="w-full max-w-[1200px] mx-auto px-3 pb-10">
          {children}
        </main>
        <FooterComponent />
      </body>
    </html>
  );
}
