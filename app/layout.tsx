import type { Metadata } from "next";
import { Inter, Urbanist } from "next/font/google";
import "./globals.css";

const inter = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "All Cars",
  description: "A place to find your dream car",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">{children}</div>
      </body>
    </html>
  );
}
