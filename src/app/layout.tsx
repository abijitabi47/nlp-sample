import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NLP & AI Portfolio | Abijit",
  description: "A research-oriented portfolio showcasing work in Natural Language Processing, Machine Learning, semantic search and AI.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
