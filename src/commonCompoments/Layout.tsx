import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Layout() {
  return (
    <div className="min-h-[93.7vh]  mt-[3.7rem] bg-indigo-100 text-gray-900">
      <Navbar />

      <main className="p-6">
        <Outlet />
      </main>

      <footer className="bg-white shadow p-4 mt-auto text-center text-sm">
        &copy; {new Date().getFullYear()} My App. All rights reserved.
      </footer>
    </div>
  );
}
