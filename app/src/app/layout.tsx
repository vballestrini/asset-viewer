import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Homebroker",
  description: "Homebroker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`h-screen flex flex-col`}>
        <div className="container mx-auto px-4 flex flex-grow">
          {children}
        </div>
      </body>
    </html>
  );
}
