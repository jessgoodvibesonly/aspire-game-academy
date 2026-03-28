import "./globals.css";

export const metadata = {
  title: "Aspire Game Academy",
  description: "Game development training in PEI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
