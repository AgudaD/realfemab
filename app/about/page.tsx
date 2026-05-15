import AboutTabs from "@/components/about/abouttabs";
import { Suspense } from "react";

export const metadata = {
  title: "About Us | Femab Properties",
  description:
    "Learn about Femab Properties Limited — Nigeria's trusted real estate partner since 1994.",
};

export default function AboutPage() {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <AboutTabs />
    </Suspense>
  );
}
