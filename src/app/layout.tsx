import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { EnquiryProvider } from "@/components/enquiry-context";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#ecefe4" };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <EnquiryProvider>{children}</EnquiryProvider>
      </body>
    </html>
  );
}
