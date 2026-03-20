"use client";

import * as React from "react";

type LegalSection = {
  id: string;
  label: string;
};

type LegalSidebarProps = {
  sections: LegalSection[];
};

export function LegalSidebar({ sections }: LegalSidebarProps) {
  const [activeId, setActiveId] = React.useState(sections[0]?.id ?? "");

  React.useEffect(() => {
    const updateActiveFromScroll = () => {
      const offset = 180;
      let current = sections[0]?.id ?? "";

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (!element) continue;

        const top = element.getBoundingClientRect().top;
        if (top - offset <= 0) {
          current = section.id;
        }
      }

      setActiveId(current);
    };

    const updateActiveFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && sections.some((section) => section.id === hash)) {
        setActiveId(hash);
      }
    };

    updateActiveFromHash();
    updateActiveFromScroll();

    window.addEventListener("scroll", updateActiveFromScroll, {
      passive: true,
    });
    window.addEventListener("hashchange", updateActiveFromHash);

    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("hashchange", updateActiveFromHash);
    };
  }, [sections]);

  return (
    <nav aria-label="Legal section navigation" className="space-y-1">
      {sections.map((section, index) => {
        const isActive = section.id === activeId;

        return (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={() => setActiveId(section.id)}
            aria-current={isActive ? "location" : undefined}
            className={`flex items-start gap-2 rounded-xl px-3 py-2 text-sm transition-colors ${
              isActive
                ? "bg-orange-50 text-[#F2891C] font-semibold"
                : "text-zinc-600 hover:text-[#F2891C] hover:bg-orange-50"
            }`}
          >
            <span className={isActive ? "text-[#F2891C]" : "text-zinc-400"}>
              {index + 1}.
            </span>
            <span>{section.label}</span>
          </a>
        );
      })}
    </nav>
  );
}
