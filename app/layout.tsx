import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import Header from "@/src/component/header/header";
import Footer from "@/src/component/footer/footer";

export const metadata: Metadata = {
  title: "La crêche de Wavre",
  description: "Le site de la crêche de Wavre",
};

export const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
});

export const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex flex-col items-center justify-center min-h-screen bg-sky-400 ${nunito.className} ${fredoka.variable}`}
      >
        <Header />
        <main
          className={`flex-1 flex flex-col items-center w-[90vw] sm:w-[80vw] md:w-[70vw] my-10`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
