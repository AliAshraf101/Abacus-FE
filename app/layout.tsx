import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banking AI Infrastructure",
  description: "Enterprise AI Infrastructure Built For Banking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
