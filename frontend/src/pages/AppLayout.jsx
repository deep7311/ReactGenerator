import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-300">
      {/* Sidebar hidden on small screens */}
      <aside className="hidden md:block w-64 bg-[#1e293b] text-white shadow-lg">
        <Sidebar />
      </aside>

      {/* Main content area full width on small screens */}
      <main className="flex-1 p-4 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
