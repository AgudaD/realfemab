import WhoWeAre from "@/components/about/whoAreWe";
import VisionMission from "@/components/about/visionMission";
import OurHistory from "@/components/about/ourhistory";

export const metadata = {
  title: "About Us | Femab Properties",
  description:
    "Learn about Femab Properties Limited — Nigeria's trusted real estate partner since 1994.",
};

export default function AboutPage() {
  return (
    <>
      <WhoWeAre />
      <VisionMission />
      <OurHistory />
    </>
  );
}