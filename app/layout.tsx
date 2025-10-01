import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { LanguageProvider } from '@/components/LanguageProvider';

const FigtreeFont = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IA Automation | Automatización Inteligente para tu Negocio",
  description: "Transformamos procesos manuales en flujos inteligentes con IA. Automatiza ventas, marketing, soporte y más. Primera consulta gratuita.",
  keywords: ["automatización", "inteligencia artificial", "IA", "automation", "chatbots", "marketing automation"],
  authors: [{ name: "IA Automation" }],
  metadataBase: new URL("https://tu-dominio.com"),
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://tu-dominio.com",
    siteName: "IA Automation",
    title: "IA Automation | Automatización Inteligente",
    description: "Automatiza tu negocio con inteligencia artificial. Primera consulta gratuita.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "IA Automation"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "IA Automation | Automatización Inteligente",
    description: "Automatiza tu negocio con IA. Primera consulta gratuita.",
    images: ["/twitter-image.png"],
    creator: "@tu_twitter"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "tu-google-verification-code",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className={FigtreeFont.className}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}