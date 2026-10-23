import type { Metadata } from "next";
import { Space_Grotesk, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeFloatingNav from "@/components/HomeFloatingNav";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz", "SOFT", "WONK"],
});

const title = "Hirebolt — High quality human intelligence for frontier AI";
const description =
  "Hirebolt helps AI companies access specialist talent, AI training workflows, and engineering capacity through a global network of vetted contributors, engineers, and domain experts.";
const ogTitle = "High quality human intelligence for frontiers AI";
const ogDescription =
  "Specialist talent, AI training workflows, and engineering capacity — on demand.";

export const metadata: Metadata = {
  metadataBase: new URL("https://hirebolt.com"),
  title: {
    default: title,
    template: "%s | Hirebolt",
  },
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: "/",
    siteName: "Hirebolt",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-900 text-white font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hirebolt",
              url: "https://hirebolt.com",
              logo: "https://hirebolt.com/hirebolt-logo.png",
              sameAs: ["https://www.linkedin.com/company/hireboltt"],
            }),
          }}
        />
        <Header />
        <HomeFloatingNav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
