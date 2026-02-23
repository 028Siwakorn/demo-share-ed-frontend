import React, { useState } from "react";
import { Edit2, Bookmark, FileText, PenTool } from "lucide-react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("bookmark"); // 'bookmark' | 'post'

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans pb-10">
      {/* 1. Banner Section */}
      <div className="h-48 md:h-64 bg-[#d6d4e0] flex items-center justify-center relative">
        <span className="font-bold text-gray-800 text-lg">
          ภาพพื้นหลังโปรไฟล์
        </span>
      </div>

      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* 2. Profile Header (Avatar, Info, Edit Button) */}
        <div className="relative pt-20 pb-6">
          {/* Avatar - Overlapping the banner */}
          <div className="absolute -top-16 left-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
              alt="Profile"
              className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-sm bg-gray-200"
            />
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-2xl font-bold uppercase">NAME NAME</h1>
              <div className="flex gap-6 mt-1 text-sm text-gray-700">
                <div className="flex flex-col">
                  <span className="font-bold text-base text-black">100</span>
                  <span>ผู้ติดตาม</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-base text-black">100</span>
                  <span>กำลังติดตาม</span>
                </div>
              </div>
              <div className="mt-3">
                <span className="px-4 py-1 bg-[#e0f5ea] text-[#2c8a5a] rounded-full text-xs font-bold inline-block">
                  มหาวิทยาลัย
                </span>
              </div>
            </div>

            {/* Edit Button */}
            <button className="flex items-center gap-2 px-5 py-2 bg-[#f0f0f5] hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-medium transition-colors">
              <Edit2 size={16} /> แก้ไข
            </button>
          </div>
        </div>

        {/* 3. Content Grid (Stats & Tabs vs Achievements) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-6">
          {/* Left Column (Stats & Tabs) */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Stats Card */}
            <div className="bg-[#f2f2f5] rounded-xl p-5 grid grid-cols-2 gap-y-6 gap-x-4 text-sm">
              <div>
                <div className="text-[#6b52a3] font-semibold mb-1">
                  จำนวนผู้ติดตาม
                </div>
                <div className="font-medium">10</div>
              </div>
              <div>
                <div className="text-[#6b52a3] font-semibold mb-1">
                  จำนวนการกดถูกใจ
                </div>
                <div className="font-medium">10</div>
              </div>
              <div>
                <div className="text-[#6b52a3] font-semibold mb-1">
                  จำนวนคนดูโพสต์
                </div>
                <div className="font-medium">10</div>
              </div>
              <div>
                <div className="text-[#6b52a3] font-semibold mb-1">
                  จำนวนคอมเม้นท์
                </div>
                <div className="font-medium">10</div>
              </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab("bookmark")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === "bookmark"
                    ? "bg-[#6b52a3] text-white shadow-md"
                    : "bg-[#f2f2f5] text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Bookmark
                  size={18}
                  className={activeTab === "bookmark" ? "fill-current" : ""}
                />{" "}
                บุ๊กมาร์ก
              </button>
              <button
                onClick={() => setActiveTab("post")}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                  activeTab === "post"
                    ? "bg-[#6b52a3] text-white shadow-md"
                    : "bg-[#f2f2f5] text-gray-600 hover:bg-gray-200"
                }`}
              >
                <FileText size={18} /> โพสต์
              </button>
            </div>
          </div>

          {/* Right Column (Achievements) */}
          <div className="md:col-span-7">
            <div className="border-b-2 border-gray-200 pb-0 flex">
              <h2 className="text-lg font-bold border-b-4 border-[#6b52a3] pb-2 pr-4 -mb-[2px]">
                Achievement
              </h2>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 mt-6">
              {/* Mock Badge 1 */}
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center overflow-hidden border-2 border-gray-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1614850715649-1d0106293cb1?q=80&w=200&auto=format&fit=crop"
                  alt="Achievement 1"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Mock Badge 2 */}
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center overflow-hidden border-2 border-gray-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop"
                  alt="Achievement 2"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Mock Badge 3 */}
              <div className="w-24 h-24 rounded-full bg-black flex items-center justify-center overflow-hidden border-2 border-gray-100 shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1618005192384-a83a8bd57fbe?q=80&w=200&auto=format&fit=crop"
                  alt="Achievement 3"
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 4. Tab Content Area (Empty State) */}
        <div className="mt-16 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-[#eaeaef] rounded-full flex items-center justify-center mb-4 text-[#6b52a3]">
            <Edit2 size={24} />
          </div>
          <h3 className="text-xl font-bold text-gray-800">ไม่มีบุ๊กมาร์ก</h3>
          <p className="text-gray-500 text-sm mt-2">
            เริ่มแบ่งปันความรู้ของคุณกับคนอื่นๆ
          </p>
          <button className="mt-6 px-10 py-2.5 bg-[#6b52a3] hover:bg-[#5a448c] text-white rounded-lg font-medium transition-colors shadow-sm">
            ไปหน้าแรก
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
