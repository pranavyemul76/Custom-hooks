import React from "react";

import useDeviceType from "../hooks/useDeviceType";

import CodeExampleLayout from "../commonComponents/CodeExampleLayout";

const UseDeviceType: React.FC = () => {
  const device = useDeviceType(true);

  return (
    <CodeExampleLayout>
      <div>
        <h2 className="text-white text-3xl">You are using: {device}</h2>
      </div>
    </CodeExampleLayout>
  );
};

export default UseDeviceType;
