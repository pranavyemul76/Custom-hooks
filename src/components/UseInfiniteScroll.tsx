import { useState } from "react";

import useInfiniteScroll from "../hooks/useInfiniteScroll";

const wait = () => {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve(0);
    }, 10000)
  );
};

export default function UseInfiniteScroll() {
  const [items, setItems] = useState(
    Array.from({ length: 20 }, (_, index) => index + 1)
  );
  const [Loading, setLoading] = useState<boolean>(false);

  const LoadMore = async () => {
    console.log("loading");
    setLoading(true);
    await wait();
    setItems((pre) => {
      return [
        ...pre,
        ...Array.from({ length: 10 }, (_, index) => pre.length + index + 1),
      ];
    });
    setLoading(false);
  };
  const containerRef = useInfiniteScroll<HTMLDivElement>({
    callback: LoadMore,
    threshold: 500,
    enabled: true,
    loading: Loading,
  });

  return (
    <div>
      <div
        ref={containerRef}
        className="bg-indigo-600 max-h-screen min-w-full overflow-y-auto"
      >
        {items.map((item) => {
          return (
            <div
              key={item}
              className="h-80 w-80 border m-3 mx-auto border-white bg-indigo-500"
            >
              {item}
            </div>
          );
        })}

        {Loading && (
          <div className="flex justify-center items-center min-w-full">
            <div className="three-body">
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
              <div className="three-body__dot"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
