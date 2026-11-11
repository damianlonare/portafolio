import { HomePage } from "@/components/pages";
import { buildMetadata } from "@/components/meta";

export const metadata = buildMetadata("en", "home");

export default function Page() {
  return <HomePage lang="en" />;
}
