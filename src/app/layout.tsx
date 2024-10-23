import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dorwell",
  description: "Welcome to Dorwell, a leading manufacturer of high-quality doors. We provide a wide range of customizable door solutions to meet your needs, focusing on durability, design, and innovation.",
  keywords: "Dorwell, door manufacturing, quality doors, customizable doors, interior doors, exterior doors, door solutions",
  applicationName: "Dorwell",
  creator: "Mihir Jaiswal",
  publisher: "Dorwell Team",
  openGraph: {
    title: "Dorwell - Quality Door Manufacturing",
    description: "Dorwell specializes in the manufacturing of high-quality, customizable doors. Explore our range of products and find the perfect door for your space.",
    url: "https://dorwell.com", // Replace with your actual URL
    siteName: "Dorwell",
    type: "website",
    images: [
      {
        url: "https://dorwell.com/your-image.jpg", // Replace with your image URL
        width: 800,
        height: 600,
        alt: "Dorwell - Quality Door Manufacturing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dorwell - Your Door Solution",
    description: "Discover high-quality, customizable doors with Dorwell. Perfect for any home or office.",
    images: ["https://dorwell.com/your-image.jpg"], // Replace with your image URL
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
