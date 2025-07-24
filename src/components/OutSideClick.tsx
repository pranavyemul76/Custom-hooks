import React, { useRef, useState } from "react";
import useOutSideClick from "../hooks/useOutSideClick";
import CodeExmapleLayout from "../commonCompoments/CodeExmapleLayout";

const OutSideClick: React.FC = () => {
  const [openBox, setOpenBox] = useState<boolean>(false);

  const boxRef = useRef<HTMLDivElement | null>(null);

  const handleBox = () => {
    setOpenBox((prev) => !prev);
  };

  useOutSideClick(boxRef, () => {
    if (openBox) setOpenBox(false);
  });

  return (
    <>
      <CodeExmapleLayout
        exampleCode={`export default function Hello() {
                     return <div>Hello, world!</div>;
              `}
        hookCode={`export default function Hello() {
                     return <div>Hello, world!</div>;
              `}
      >
        <div className="relative h-full w-full">
          <div className="min-h-full relative z-0 flex justify-center items-center min-w-full">
            <button className="p-7 text-white text-4xl" onClick={handleBox}>
              Open Box
            </button>
          </div>
          {openBox && (
            <div className=" absolute top-0  z-10 min-h-full w-full border-2 gap-10 flex justify-center items-center bg-secondary">
              <div className="text-white text-4xl">OutSide Box</div>
              <div
                className="bg-accent text-center text-white text-4xl font-semibold p-8 w-80"
                ref={boxRef}
              >
                Inside Box
              </div>
            </div>
          )}
        </div>
      </CodeExmapleLayout>
    </>
  );
};

export default OutSideClick;
