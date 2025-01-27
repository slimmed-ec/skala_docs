import { Head } from "nextra/components";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "nextra-theme-docs/style.css";
import "./globals.css";

import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { getPageMap } from "nextra/page-map";
import { SkalaLogo } from "@/components/ui/logo";

// const banner = (
//   <Banner storageKey="some-key">SKALA AI 4.0 is released 🎉</Banner>
// );
const footer = <Footer>MIT {new Date().getFullYear()} © Skala AI.</Footer>;

export const metadata: Metadata = {
  title: "Nextra 4",
  description: "Nextra 4 is here.",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          // banner={banner}
          navbar={
            <Navbar
              logo={<SkalaLogo width={150} />}
              projectLink="https://github.com/officialrajdeepsingh/nextra-4"
            />
          }
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/officialrajdeepsingh/nextra-4/tree/main/docs"
          editLink="Edit this page on GitHub"
          sidebar={{ defaultMenuCollapseLevel: 1, autoCollapse: true }}
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
