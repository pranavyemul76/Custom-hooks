import React from "react";
import useLocalStorage from "../hooks/useLocalStorage"; // adjust path as needed

const UseLocalStorage: React.FC = () => {
  const [username, setUsername] = useLocalStorage<string>("username", "");
  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">Welcome Back!</h2>
      <input
        className="border rounded px-3 py-2 w-full mb-3"
        type="text"
        value={username}
        placeholder="Enter your name"
        onChange={(e) => setUsername(e.target.value)}
      />
      <p className="text-gray-700">
        Your name is: <strong>{username || "Anonymous"}</strong>
      </p>
    </div>
  );
};

export default UseLocalStorage;
