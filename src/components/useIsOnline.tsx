import React from "react";
import useIsOnline from "../hooks/useIsOnline";
import CodeExampleLayout from "../commonComponents/CodeExampleLayout";

const UseIsOnline: React.FC = () => {
  const isOnline = useIsOnline();

  return (
    <CodeExampleLayout>
      <div
        className={`p-4 rounded ${isOnline ? "bg-green-100" : "bg-red-100"} `}
      >
        <p className="text-lg">
          You are currently <strong>{isOnline ? "Online" : "Offline"}</strong>
        </p>
      </div>
    </CodeExampleLayout>
  );
};

export default UseIsOnline;
