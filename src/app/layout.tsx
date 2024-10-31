import cn from "classnames";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Background from "./_components/background";
import Footer from "./_components/footer";
import Navigation from "./_components/navigation";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `MCZ Festas`,
  description: `Encontre fornecedores de festas em Maceió`,
  openGraph: {
    images: ["/assets/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/logo.png"
        />
      </head>
      <body
        className={cn(
          inter.className,
          " relative dark:bg-slate-900 dark:text-slate-400"
        )}
      >
        <Background />
        <Navigation />
        <div className="flex flex-col min-h-screen justify-between">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
