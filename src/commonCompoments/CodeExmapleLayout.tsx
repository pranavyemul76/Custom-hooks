import type React from "react";
type PropsWithChildren = {
  children: React.ReactNode;
  hookCode: string;
  exampleCode: string;
};
export default function CodeExmapleLayout({
  children,
  hookCode,
  exampleCode,
}: PropsWithChildren) {
  return (
    <div className="grid grid-cols-2 gap-1 min-h-[88.8vh]">
      <div className="bg-primary"> {children}</div>
      <div className="p-8 bg-accent">
        <pre className="bg-slate-800 text-white text-sm p-4 rounded-lg overflow-auto">
          <code>{hookCode}</code>
        </pre>
        <pre className="bg-slate-800 mt-4 text-white text-sm p-4 rounded-lg overflow-auto">
          <code>{exampleCode}</code>
        </pre>
      </div>
    </div>
  );
}
