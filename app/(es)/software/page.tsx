import { SoftwarePage } from "@/components/pages";
import { buildMetadata } from "@/components/meta";

export const metadata = buildMetadata("es", "software");

export default function Page() {
  return <SoftwarePage lang="es" />;
}
