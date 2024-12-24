import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import 'toastr/build/toastr.min.css';

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Helderlig Commmerico PVT LTD",
  description: "Helderlig Commmerico PVT LTD - Leading provider of sustainable timber solutions, eco-friendly wood products, and innovative forestry management services. We specialize in premium quality timber, environmental conservation, and sustainable forestry practices.",
  keywords: "sustainable timber, eco-friendly wood, timber solutions, forestry management, wood products, environmental conservation, sustainable forestry, Helderlig Commmerico, timber supplier, green building materials, hardwood timber, softwood timber, timber trading, wholesale timber, timber certification, FSC certified wood, sustainable lumber, timber export, timber import, wood processing, timber manufacturing, forest products, timber construction, timber industry, renewable resources, responsible forestry, timber merchants, wood sustainability, timber procurement, timber distribution, commercial timber",
  authors: [{ name: "Helderlig Commmerico PVT LTD" }],
  openGraph: {
    title: "Helderlig Commmerico PVT LTD - Smart Solutions for Sustainable Timber",
    description: "Leading provider of sustainable timber solutions and eco-friendly wood products. Discover our premium quality timber and environmental conservation services.",
    type: "website",
  },
  robots: "index, follow",
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
      { url: '/icon-large.png', type: 'image/png', sizes: '192x192' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
