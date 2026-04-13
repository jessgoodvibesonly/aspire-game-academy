import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aspire Game Academy",
  description: "7 days inside video game production.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
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
