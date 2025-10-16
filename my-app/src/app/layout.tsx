import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Banyans Craft Kitchen + Lounge",
  description: "Globally inspired, locally sourced",
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
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        />
      </head>
      <body>{children}</body>
    </html>
  );
}