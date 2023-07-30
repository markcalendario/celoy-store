import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/fontawesome/css/all.min.css";
import "../styles/main.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CLOY | Lanyards",
  description: "Customized lanyards for PUP students."
};

type RootPropsTypes = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootPropsTypes) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
