import type { Metadata } from "next";
import "../styles/fontawesome/css/all.min.css";
import "../styles/main.scss";

export const metadata: Metadata = {
  title: "CELOY | Printing Services",
  description: "Printing services for PUP students.",
  manifest: "/favicons/site.webmanifest",
  icons: {
    icon: "/favicons/favicon-32x32.png",
    shortcut: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
    other: {
      rel: "mask-icon",
      url: "/favicons/safari-pinned-tab.svg"
    }
  },
  other: {
    "msapplication-TileColor": "#da532c",
    "msapplication-config": "/favicons/browserconfig.xml",
    "theme-color": "#ffffff"
  }
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
