import type { Metadata } from "next";
import "./globals.css";
import "./hover.css";

export const metadata: Metadata = {
  title: "Casey Foodny · Catering & Treats",
  description:
    "Catering dominicano en Westchester, NY: cenas familiares, picaderas y buffets para eventos, hechos en casa con amor.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
