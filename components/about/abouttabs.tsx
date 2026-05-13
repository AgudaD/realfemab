"use client";

import { useState } from "react";
import WhoWeAre from "./whoAreWe";
import VisionMission from "./visionMission";
import OurHistory from "./ourhistory";
import CoreDepartments from "./coredepartments";
import Leadership from "./leadership";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "departments", label: "Core Departments" },
  { id: "leadership", label: "Leadership" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function AboutTabs() {
  const [active, setActive] = useState<TabId>("overview");

  return (
    <div>
      <div className="sticky top-20 z-30 bg-black/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 md:px-16 flex items-center gap-1 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab.id)}
              className={`
                relative shrink-0 px-5 py-4 text-sm font-medium transition-colors duration-150
                ${
                  active === tab.id
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"
                }
              `}
            >
              {tab.label}
              {active === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div>
        {active === "overview" && (
          <>
            <WhoWeAre />
            <VisionMission />
            <OurHistory />
          </>
        )}

        {active === "departments" && <CoreDepartments />}

        {active === "leadership" && <Leadership />}
      </div>
    </div>
  );
}