import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { LanguageProvider } from "@/components/providers/language-provider";

export const metadata: Metadata = {
  title: "Dr. Juan Camilo Cadavid Usuga",
  description:
    "Especialista en córnea, segmento anterior y cirugía refractiva en Medellín.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-scroll-behavior="smooth">
      <body className="bg-white text-slate-950 antialiased">
        <LanguageProvider>
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}