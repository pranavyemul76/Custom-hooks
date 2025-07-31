import CodeExampleLayout from "../commonComponents/CodeExampleLayout";
import { useClipboard } from "../hooks/useClipboard";

const UseClipboard = () => {
  const [copied, copy] = useClipboard();

  return (
    <CodeExampleLayout>
      <div className="flex flex-col items-center justify-center min-h-full">
        <button
          onClick={() => copy("Copied from clipboard hook!")}
          className="px-4 py-2 bg-white text-primary rounded active:translate-y-2   transition-transform duration-200 "
        >
          {copied ? "Copied!" : "Copy Text"}
        </button>
      </div>
    </CodeExampleLayout>
  );
};

export default UseClipboard;
