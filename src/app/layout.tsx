import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://khanate.xyz"),
  title: "Ameer Khan — Product, GTM & Business Development",
  description:
    "Ameer Khan is an operator, advisor, and builder working across product, go-to-market, and business development with emerging-technology ventures.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ameer Khan — Operator, Advisor & Builder",
    description:
      "Building products, markets, and partnerships across AI, digital health, agent infrastructure, and decentralized finance.",
    type: "website",
    url: "https://khanate.xyz",
    siteName: "Khanate",
  },
  twitter: {
    card: "summary",
    title: "Ameer Khan — Operator, Advisor & Builder",
    description:
      "Product, go-to-market, and business development for ambitious technology ventures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.variable} ${cormorantGaramond.variable}`}>
        {children}
      </body>
    </html>
  );
}
