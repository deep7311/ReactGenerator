import React, { useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiPlus, FiTrash2 } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";
import axios from "../axios";
import { toast } from "react-toastify";
import clsx from "clsx";
import logo from "../assets/logo.png";

const Sidebar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { sessions, setSessions, fetchSessions } = useAuthContext();

  useEffect(() => {
    if (user) fetchSessions();
  }, [user, location.pathname]);

  const handleNewChat = async () => {
    try {
      const res = await axios.post("/api/sessions", {
        title: "Untitled Session",
      });

      const { alreadyExists, session } = res.data;
      alreadyExists
        ? toast.info("You already have an empty session. Redirecting...")
        : toast.success("New session created!");

      navigate(`/dashboard/editor/${session._id}`);
    } catch (err) {
      toast.error("Something went wrong while creating a session.");
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
      navigate("/");
    } catch {
      toast.error("Logout failed");
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/sessions/${id}`);
      toast.success("Session deleted");
      setSessions((prev) => prev.filter((s) => s._id !== id));
      if (location.pathname === `/dashboard/editor/${id}`) {
        navigate("/dashboard");
      }
    } catch {
      toast.error("Failed to delete session");
    }
  };

  return (
    <div className="h-screen w-64 bg-[#0f172a] text-white flex flex-col justify-between p-4 border-r border-slate-700 shadow-lg">
      {/* Logo + Title */}
      <div className="flex items-center gap-3 mb-6 cursor-pointer" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="h-8 w-8 rounded-full" />
        <span className="text-xl font-semibold tracking-wide">Drive JSX</span>
      </div>

      {/* New Chat Button */}
      <button
        onClick={handleNewChat}
        className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-4 py-2 rounded-xl shadow-md transition-all duration-200 mb-4"
      >
        <FiPlus size={18} />
        New Chat
      </button>

      {/* Session List */}
      <div className="flex-1 overflow-y-auto hide-scrollbar">
        {sessions.length > 0 ? (
          sessions.map((s) => (
            <div
              key={s._id}
              className={clsx(
                "flex items-center justify-between bg-[#1e293b] hover:bg-[#334155] rounded-lg px-3 py-2 mb-2 transition-all group",
                location.pathname === `/dashboard/editor/${s._id}` && "bg-blue-700"
              )}
            >
              <Link
                to={`/dashboard/editor/${s._id}`}
                className="truncate flex-1 mr-2 text-sm font-medium"
              >
                {s.title || "Untitled Session"}
              </Link>
              <button
                onClick={() => handleDelete(s._id)}
                className="text-gray-400 hover:text-red-400 transition"
              >
                <FiTrash2 size={16} />
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-400 italic text-sm">No chats yet</p>
        )}
      </div>

      {/* Bottom Buttons */}
      <div className="mt-4 flex flex-col gap-2">
        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition"
        >
          🏠 Go to Dashboard
        </button>

        <button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition"
        >
          <AiOutlineLogout />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;

