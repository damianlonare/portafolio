import { HirePage } from "@/components/pages";
import { buildMetadata } from "@/components/meta";

export const metadata = buildMetadata("en", "hire");

export default function Page() {
  return <HirePage lang="en" />;
}
