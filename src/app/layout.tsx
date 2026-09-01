import type { Metadata } from "next";
import localFont from "next/font/local";
import { Fraunces } from "next/font/google";
import "./globals.css";

const jetbrainsMono = localFont({
  src: "../../public/fonts/JetBrainsMono-var.woff2",
  variable: "--font-jetbrains-mono",
  display: "swap",
  preload: true,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "oddbatch — a quiet shelf for small apps",
  description:
    "Independent tools built by people without marketing teams. Collected here because the good ones are hard to find.",
  metadataBase: new URL("https://oddbatch.app"),
  alternates: {
    canonical: "https://oddbatch.app",
  },
  openGraph: {
    title: "oddbatch",
    description: "A quiet shelf for small apps.",
    url: "https://oddbatch.app",
    type: "website",
    images: [{ url: "/og.png" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "oddbatch",
    description: "A quiet shelf for small apps.",
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
    <html lang="en" className={`${jetbrainsMono.variable} ${fraunces.variable}`}>
      <head>
        {/* Restore persisted theme before first paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('oddbatch-theme');if(t==='dark')document.documentElement.setAttribute('data-theme','dark');}catch(e){}})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
