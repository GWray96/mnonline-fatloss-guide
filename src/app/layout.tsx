import type { Metadata } from "next";
import { Bebas_Neue, Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const barlow = Barlow({
  weight: ["300", "400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const barlowCondensed = Barlow_Condensed({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

export const metadata: Metadata = {
  title: "The Complete Fat Loss Guide — MN Online Coaching",
  description:
    "Everything you need to understand nutrition, training, and lifestyle to build the body you actually want — without the bullshit.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${bebasNeue.variable} ${barlow.variable} ${barlowCondensed.variable} font-sans antialiased bg-[#0D0D0D] text-[#F0EDE8] overflow-x-hidden`}
        style={{ fontFamily: "var(--font-barlow), Barlow, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
