import type { Metadata } from "next";
import "./styles/scss/bootstrap.scss";
import "react-phone-input-2/lib/style.css";
import "./globals.css";
import "./styles.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
