"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import WhoWeAre from "./whoAreWe";
import VisionMission from "./visionMission";
import OurHistory from "./ourhistory";
import CoreDepartments from "./coredepartments";
import Leadership from "./leadership";


const tabs = [
  { id: "overview",     label: "Overview" },
  { id: "departments",  label: "Core Departments" },
  { id: "leadership",   label: "Leadership" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function isValidTab(value: string | null): value is TabId {
  return tabs.some((t) => t.id === value);
}


export default function AboutTabs() {
  const searchParams  = useSearchParams();
  const router        = useRouter();
  const initialTab    = isValidTab(searchParams.get("tab"))
    ? (searchParams.get("tab") as TabId)
    : "overview";

  const [active, setActive]       = useState<TabId>(initialTab);
  const indicatorRef              = useRef<HTMLSpanElement>(null);
  const tabRefs                   = useRef<Record<string, HTMLButtonElement | null>>({});

  
  function handleTabChange(id: TabId) {
    setActive(id);
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", id);
    router.replace(`?${params.toString()}`, { scroll: false });
  }

  useEffect(() => {
    const btn = tabRefs.current[active];
    const ind = indicatorRef.current;
    if (!btn || !ind) return;

    const { offsetLeft: left, offsetWidth: width } = btn;
    ind.style.transform  = `translateX(${left}px)`;
    ind.style.width      = `${width}px`;
  }, [active]);

  return (
    <>
      <div
        className="sticky z-30 bg-black/80 backdrop-blur-md border-b border-zinc-800/60"
        style={{ top: "var(--nav-height, 80px)" }}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-16 relative">
          <span
            ref={indicatorRef}
            aria-hidden
            className="absolute bottom-0 left-0 h-0.5 bg-accent rounded-full transition-[transform,width] duration-300 ease-out"
            style={{ width: 0 }}
          />

          <div
            role="tablist"
            aria-label="About sections"
            className="flex items-center gap-1 overflow-x-auto scrollbar-none"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                id={`tab-${tab.id}`}
                aria-controls={`panel-${tab.id}`}
                aria-selected={active === tab.id}
                ref={(el) => { tabRefs.current[tab.id] = el; }}
                onClick={() => handleTabChange(tab.id)}
                className={`
                  relative shrink-0 px-5 py-4 text-sm font-medium
                  transition-colors duration-150 outline-none
                  focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2
                  focus-visible:ring-offset-black rounded-sm
                  ${active === tab.id
                    ? "text-white"
                    : "text-zinc-500 hover:text-zinc-300"}
                `}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-0">
        {active === "overview" && (
          <div
            role="tabpanel"
            id="panel-overview"
            aria-labelledby="tab-overview"
          >
            <WhoWeAre />
            <VisionMission />
            <OurHistory />
          </div>
        )}

        {active === "departments" && (
          <div
            role="tabpanel"
            id="panel-departments"
            aria-labelledby="tab-departments"
          >
            <CoreDepartments />
          </div>
        )}

        {active === "leadership" && (
          <div
            role="tabpanel"
            id="panel-leadership"
            aria-labelledby="tab-leadership"
          >
            <Leadership />
          </div>
        )}
      </div>
    </>
  );
}