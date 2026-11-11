import type { Viewport } from "next";
import "../globals.css";
import { buildMetadata } from "@/components/meta";

export const metadata = buildMetadata("en");

export const viewport: Viewport = { themeColor: "#0b0a10" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
