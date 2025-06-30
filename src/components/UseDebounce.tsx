import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

const dummyData: string[] = [
  "React",
  "Node.js",
  "Express",
  "TypeScript",
  "MongoDB",
  "JavaScript",
  "Next.js",
  "Redux",
];

function wait(ms: number = 1000, signal?: AbortSignal): Promise<void> {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(resolve, ms);
    if (signal) {
      signal.addEventListener(
        "abort",
        () => {
          clearTimeout(timeout);
          reject(new DOMException("Aborted", "AbortError"));
        },
        { once: true }
      );
    }
  });
}

const UseDebounce: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [debouncedSearchTerm, debounceLoading] = useDebounce<string>(
    searchTerm,
    600,
    true
  );
  const [filteredData, setFilteredData] = useState<string[]>(dummyData);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    const fetchFiltered = async () => {
      try {
        await wait(3000, controller.signal);
        const normalized = debouncedSearchTerm.trim().toLowerCase();

        const result = normalized
          ? dummyData.filter((item) => item.toLowerCase().includes(normalized))
          : dummyData;

        setFilteredData(result);
        setLoading(false);
      } catch (err) {
        if ((err as DOMException).name === "AbortError") {
          console.log("Wait aborted");
        }
      }
    };

    fetchFiltered();

    return () => {
      controller.abort(); // Cleanup
    };
  }, [debouncedSearchTerm]);

  return (
    <div className="bg-violet-400 min-h-screen">
      <div className="p-4 max-w-md mx-auto">
        <input
          type="text"
          className="border rounded px-4 py-2 w-full"
          placeholder="Search technology..."
          value={searchTerm}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setLoading(true);
            setSearchTerm(e.target.value);
          }}
        />
      </div>

      <div className="flex text-3xl text-white justify-center items-center p-4">
        {debounceLoading ? (
          <div>Debounce start, please wait...</div>
        ) : loading ? (
          <div>Filtering data, please wait...</div>
        ) : filteredData.length > 0 ? (
          <ul className="list-disc pl-5 space-y-1">
            {filteredData.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default UseDebounce;
