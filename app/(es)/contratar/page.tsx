import { HirePage } from "@/components/pages";
import { buildMetadata } from "@/components/meta";

export const metadata = buildMetadata("es", "hire");

export default function Page() {
  return <HirePage lang="es" />;
}
