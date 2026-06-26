import type { Metadata } from "next";
import { Fraunces, Nunito } from "next/font/google";
import "./globals.css";
import WhatsAppWidget from "@/components/WhatsAppWidget";
import VideoWidget from "@/components/VideoWidget";

const fraunces = Fraunces({
  variable: "--font-serif",
  subsets: ["latin"],
});

const nunito = Nunito({
  variable: "--font-sans",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://manga-prosa-gm2j.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Manga & Prosa | Restaurante em Confins perto do Aquabeat",
  description: "Restaurante em Confins na beira da MG-424, pertim do Aquabeat. Café da manhã, almoço caseiro mineiro, lanches, sobremesas e marmitex bem servida no Manga & Prosa.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Manga & Prosa | Restaurante em Confins perto do Aquabeat",
    description: "Restaurante em Confins na beira da MG-424, pertim do Aquabeat. Café da manhã, almoço caseiro mineiro, lanches, sobremesas e marmitex bem servida no Manga & Prosa.",
    url: siteUrl,
    siteName: "Manga & Prosa",
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/Imagem/fora1.jpg", width: 1200, height: 630, alt: "Restaurante Manga & Prosa na MG-424, Confins MG — comida caseira mineira perto do Aquabeat" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manga & Prosa | Restaurante em Confins perto do Aquabeat",
    description: "Restaurante em Confins na beira da MG-424, pertim do Aquabeat. Café da manhã, almoço caseiro mineiro, lanches, sobremesas e marmitex no Manga & Prosa.",
    images: ["/Imagem/fora1.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${fraunces.variable} ${nunito.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col font-sans antialiased text-foreground bg-background">
        {children}
        <WhatsAppWidget />
        <VideoWidget />
      </body>
    </html>
  );
}

