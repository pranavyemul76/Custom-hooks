import React, { useMemo, useState } from "react";

type PropsWithChildren = {
  children: React.ReactNode;
};

export default function CodeExampleLayout({ children }: PropsWithChildren) {
  const tabList = useMemo(
    () => [
      { key: "hook", label: "Hook", content: "hookCode" },
      { key: "component", label: "Component", content: "exampleCode" },
    ],
    []
  );

  const [activeTab, setActiveTab] = useState("hook");

  const activeTabContent = useMemo(
    () => tabList.find((tab) => tab.key === activeTab)?.content || "",
    [tabList, activeTab]
  );

  return (
    <div className="grid grid-cols-2 gap-1 min-h-[88.8vh]">
      <div className="bg-primary h-full flex justify-center items-center">
        {children}
      </div>

      <div className="bg-[#1e1e1e] text-white overflow-y-auto font-mono p-4 shadow-xl w-full max-w-4xl mx-auto">
        <div className="flex space-x-2 mb-4">
          {tabList.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-secondary text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
              aria-selected={activeTab === tab.key}
              role="tab"
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="text-sm space-y-1" role="tabpanel">
          <pre className="whitespace-pre-wrap">{activeTabContent}</pre>
        </div>
      </div>
    </div>
  );
}
