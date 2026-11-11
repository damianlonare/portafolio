import { HomePage } from "@/components/pages";
import { buildMetadata } from "@/components/meta";

export const metadata = buildMetadata("es", "home");

export default function Page() {
  return <HomePage lang="es" />;
}
