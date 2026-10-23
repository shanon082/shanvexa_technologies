import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { EnquiryProvider } from "@/components/enquiry-context";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  alternates: { canonical: "/" },
  title: `${site.name} | Websites & Custom Software in Uganda`,
  description: site.description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
    url: site.url,
    siteName: site.name,
    locale: "en_UG",
    images: [{
      url: "/opengraph-image", width: 1200, height: 630,
      alt: `${site.name} — ${site.tagline}`,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = { themeColor: "#ecefe4" };

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  slogan: site.tagline,
  email: site.email,
  telephone: `+${site.whatsapp}`,
  logo: `${site.url}/favicon.svg`,
  founder: { "@type": "Person", name: "Shanon Simon Lubega" },
  areaServed: { "@type": "Country", name: "Uganda" },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organization).replace(/</g, "\\u003c") }}
        />
        <EnquiryProvider>{children}</EnquiryProvider>
      </body>
    </html>
  );
}
