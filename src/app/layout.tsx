import type { Metadata } from "next";
import Head from "next/head";
import "./globals.css";
// import "../sass/global.scss"; //
import { Poppins } from "next/font/google";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RHP RESIDENTIAL AND COMMERCIAL HOMES AND PROPERTIES",
  description:
    "Tech space for affordable homes and properties. Just one click away.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preload" as="image" href="https://your-cdn.com/image.webp" />
      </Head>
      <body className={`${poppins.variable}`}>{children}</body>
    </html>
  );
}
