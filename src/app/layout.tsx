import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MedDisha - Medical Assistant",
  description: "Your trusted medical assistant for healthcare management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="animate-gradient"
        style={{
          minHeight: "100vh",
          background:
            "linear-gradient(-45deg, #0C5367, #E16308, #1a6b7a, #ff7a1a)",
          margin: 0,
          padding: 0,
        }}
      >
        {children}
      </body>
    </html>
  );
}
