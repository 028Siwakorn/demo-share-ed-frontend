import React from "react";
import { Bell, NotebookPen, Search, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar bg-[#42365F] px-3 md:px-6 text-white">
      {/* LEFT: Logo + mobile menu */}
      <div className="flex-1 gap-2">
        {/* Mobile menu icon */}
        <button className="btn btn-ghost btn-circle md:hidden">
          <Menu size={22} />
        </button>

        <div className="flex items-center gap-2 font-bold text-lg md:text-xl">
          <img
            src="/shareed.png"
            alt="ShareED Logo"
            className="h-7 w-7 md:h-8 md:w-8"
          />
          <span className="hidden sm:inline">SHARE ED</span>
        </div>
      </div>

      {/* CENTER: Search (desktop only) */}
      <div className="flex-none w-2/4 hidden md:block">
        <label className="input input-bordered flex items-center gap-2 bg-white text-black">
          <Search className="h-4 w-4 opacity-70" />
          <input
            type="text"
            className="grow"
            placeholder="ค้นหาโพสต์,หัวข้อ,แท็ก"
          />
        </label>
      </div>

      {/* RIGHT: Actions */}
      <div className="flex-none flex items-center gap-1 sm:gap-3">
        {/* Mobile search */}
        <button className="btn btn-ghost btn-circle md:hidden">
          <Search size={20} />
        </button>

        {/* Post Button */}

        <NotebookPen size={16} />
        <Link to="/create" className="btn btn-primary">
          เพิ่มโพสต์
        </Link>

        {/* Notification */}
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <Bell size={20} />
            <span className="badge badge-xs badge-error indicator-item"></span>
          </div>
        </button>

        {/* Avatar */}
        <div className="avatar">
          <div className="w-8 sm:w-10 rounded-full">
            <img src="https://i.pravatar.cc/100" alt="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
}
