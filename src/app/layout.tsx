import type { Metadata } from "next";
import "../styles/fontawesome/css/all.min.css";
import "../styles/main.scss";

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
      <body>{children}</body>
    </html>
  );
}
