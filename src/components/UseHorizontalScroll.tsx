import { useHorizontalScroll } from "../hooks/useHorizontalScroll";

const HorizontalGridScroll = () => {
  const { scrollRef, scroll } = useHorizontalScroll();

  return (
    <div className="h-screen w-full flex  z-30 border-s-cyan-700">
      <div className="relative w-full px-8 my-auto">
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-white px-2 py-1 shadow"
        >
          ⬅️
        </button>
        <div
          ref={scrollRef}
          className="overflow-x-auto no-scrollbar scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex">
            {[...Array(70)].map((_, i) => (
              <div key={i} className="shrink-0 h-80 w-[20%]">
                <div className="m-1 h-full text-white text-center flex justify-center items-center  bg-violet-600">
                  {i}
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => scroll("right")}
          className=" absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white px-2 py-1 shadow"
        >
          ➡️
        </button>
      </div>{" "}
    </div>
  );
};

export default HorizontalGridScroll;
