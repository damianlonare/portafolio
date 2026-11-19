import { DemosPage } from "@/components/pages";
import { buildMetadata } from "@/components/meta";

export const metadata = buildMetadata("es", "demos");

export default function Page() {
  return <DemosPage lang="es" />;
}
