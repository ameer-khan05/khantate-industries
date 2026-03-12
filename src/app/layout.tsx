import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Khanate Industries — AI & Web3 Advisory",
  description:
    "Khanate Industries helps business leaders and enterprises navigate AI and Web3. Expert advisory, strategy, and education from Ameer Khan.",
  openGraph: {
    title: "Khanate Industries — AI & Web3 Advisory",
    description:
      "Helping enterprises understand and leverage AI and Web3 technologies.",
    type: "website",
    url: "https://khantate-industries.vercel.app",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${dmSans.variable} ${cormorantGaramond.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
