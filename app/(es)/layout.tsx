import type { Viewport } from "next";
import "../globals.css";
import { buildMetadata } from "@/components/meta";

export const metadata = buildMetadata("es");

export const viewport: Viewport = { themeColor: "#0b0a10" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
