import { DemosPage } from "@/components/pages";
import { buildMetadata } from "@/components/meta";

export const metadata = buildMetadata("en", "demos");

export default function Page() {
  return <DemosPage lang="en" />;
}
