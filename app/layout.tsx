import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TREAZURE",
  description: "Smart deals on trending products",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
