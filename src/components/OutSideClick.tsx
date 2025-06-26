import React, { useRef, useState } from "react";
import useOutSideClick from "../hooks/useOutSideClick";

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
      <div className="bg-blue-800 min-h-screen z-0 flex justify-center items-center min-w-full">
        <button className="p-7 text-white text-4xl" onClick={handleBox}>
          Open Box
        </button>
      </div>

      {openBox && (
        <div className="fixed top-0 z-10 min-h-screen border-2 border-violet-700 gap-10 flex justify-center items-center min-w-full bg-indigo-300">
          <div className="text-white text-4xl">OutSide Box</div>
          <div
            className="bg-violet-600 text-center text-white text-4xl font-semibold p-8 w-80"
            ref={boxRef}
          >
            Inside Box
          </div>
        </div>
      )}
    </>
  );
};

export default OutSideClick;
