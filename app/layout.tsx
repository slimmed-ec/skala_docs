import type { Metadata } from "next";
import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { SkalaLogo } from "@/components/ui/logo";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://nextra.site"),
  title: "%s - Nextra",
  description: "Nextra: the Next.js site builder",
  applicationName: "Nextra",
  generator: "Next.js",
  appleWebApp: {
    title: "Nextra",
  },
  other: {
    "msapplication-TileImage": "/ms-icon-144x144.png",
    "msapplication-TileColor": "#fff",
  },
  twitter: {
    site: "https://nextra.site",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navbar = (
    <Navbar logo={<SkalaLogo width={150} />} chatLink="https://skala.xyz" />
  );
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head faviconGlyph="✦" />
      <body>
        <Layout
          banner={<Banner storageKey="Nextra 2">Skala AI V3.2</Banner>}
          navbar={navbar}
          footer={<Footer />}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://docs.skala.xyz"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={await getPageMap()}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
