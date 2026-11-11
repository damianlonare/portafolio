import { SoftwarePage } from "@/components/pages";
import { buildMetadata } from "@/components/meta";

export const metadata = buildMetadata("en", "software");

export default function Page() {
  return <SoftwarePage lang="en" />;
}
