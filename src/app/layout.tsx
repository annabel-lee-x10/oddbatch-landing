import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const jetbrainsMono = localFont({
  src: "../../public/fonts/JetBrainsMono-var.woff2",
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "oddbatch — a quiet shelf for small apps",
  description:
    "Independent apps, collected in one place. Not affiliated with any of them.",
  metadataBase: new URL("https://oddbatch.app"),
  alternates: {
    canonical: "https://oddbatch.app",
  },
  openGraph: {
    title: "oddbatch — a quiet shelf for small apps",
    description:
      "Independent apps, collected in one place. Not affiliated with any of them.",
    url: "https://oddbatch.app",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "oddbatch — a quiet shelf for small apps",
    description:
      "Independent apps, collected in one place. Not affiliated with any of them.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body>{children}</body>
    </html>
  );
}
