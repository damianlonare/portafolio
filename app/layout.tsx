import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Damian Longoria · Frontend Engineer",
  description:
    "Frontend Engineer (React / TypeScript). Interfaces web, sitios para negocios y video programático con Remotion. Monterrey, México.",
  openGraph: {
    title: "Damian Longoria · Frontend Engineer",
    description: "React / TypeScript · sitios web · video programático",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0a10",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
