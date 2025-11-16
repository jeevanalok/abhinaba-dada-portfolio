import type { Metadata } from "next";
import { Gajraj_One } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const Gajraj_OneFont = Gajraj_One({
  subsets: ["devanagari", "latin"],
  weight: ["400"],
  variable: "--font-gajraj",
});

const productSans = localFont({
  src: [
    {
      path: "./fonts/ProductSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/ProductSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/ProductSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/ProductSans-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-productsans",
});

const Englisch = localFont({
  src: [
    {
      path: "./fonts/Englisch-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-englisch",
});
export const metadata: Metadata = {
  title: "Abhinaba Dash - Portfolio",
  description: "Rangrej | Interaction Designer | Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${Gajraj_OneFont.variable} ${productSans.variable} ${Englisch.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
