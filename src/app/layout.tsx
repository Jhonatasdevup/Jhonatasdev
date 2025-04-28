import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jhonatas Oliveira | Criação de Sites e Aplicativos Profissionais",
  description:
    "Crio sites e aplicativos mobile personalizados com design moderno, alta performance e foco total em resultados. Transforme sua presença digital com soluções profissionais.",
  keywords: [
    "Criação de sites",
    "Desenvolvimento web",
    "Aplicativos mobile",
    "React Native",
    "Next.js",
    "Desenvolvedor Front-end",
    "Landing Page",
    "Site institucional",
    "Portfólio digital",
    "Desenvolvedor em São José dos Campos",
    "Sites responsivos",
    "Aplicativos Android e iOS",
    "Freelancer de sites",
    "Programador de sites",
    "Sites para empresas",
  ],
  authors: [
    {
      name: "Jhonatas Oliveira",
      url: "https://jhonatasdev.vercel.app/",
    },
  ],
  creator: "Jhonatas Oliveira",
  publisher: "JhonatasDev",
  metadataBase: new URL("https://jhonatasdev.vercel.app/"),
  openGraph: {
    title: "Jhonatas Oliveira | Criação de Sites e Aplicativos Profissionais",
    description:
      "Desenvolvedor especializado na criação de sites e aplicativos mobile modernos, rápidos e responsivos. Conquiste sua presença digital!",
    url: "https://jhonatasdev.vercel.app/",
    siteName: "JhonatasDev",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png", // Coloque uma imagem de divulgação no public/ depois!
        width: 1200,
        height: 630,
        alt: "Jhonatas - Criação de Sites e Aplicativos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhonatas Oliveira | Criação de Sites e Aplicativos Profissionais",
    description:
      "Transforme sua presença online! Sites, landing pages e apps mobile modernos e personalizados.",
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  category: "Tecnologia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
