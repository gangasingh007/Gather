import type { Metadata } from "next";
import { Rubik, Space_Grotesk } from "next/font/google";
import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gather — Discover, Book & Attend Live Events",
  description:
    "Gather is a full-stack platform for discovering, booking, and attending live events. Find hackathons, concerts, meetups, workshops, and more happening near you.",
  openGraph: {
    title: "Gather — Discover, Book & Attend Live Events",
    description:
      "Find hackathons, concerts, meetups, workshops, and more happening near you. Book instantly, get your QR ticket.",
    siteName: "Gather",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${rubik.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
