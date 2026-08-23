import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "canvas-node-01ve",
  description: "mske me a flappy-bird game using nextjs",
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
