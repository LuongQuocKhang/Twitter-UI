"use client";

import { FiBell, FiUser, FiHash, FiMessageCircle, 
	FiBookmark, FiList, FiHome, FiMoreHorizontal, FiLogOut } from "react-icons/fi";

import SidebarLogo from "./SidebarLogo";
import SidebarItem from "./SidebarItem";
import SidebarTweetButton from "./SidebarTweetButton";

const Sidebar = () => {
  const items = [
    {
      label: "Trang chủ",
      href: "/",
      icon: FiHome,
    },
    {
      label: "Khám phá",
      href: "/explore",
      icon: FiHash,
    },
    {
      label: "Tin nhắn",
      href: "/messages",
      icon: FiMessageCircle,
    },
    {
      label: "Danh sách",
      href: "/list",
      icon: FiList,
    },
    {
      label: "Dấu trang",
      href: "/bookmarks",
      icon: FiBookmark,
    },
    {
      label: "Thông báo",
      href: "/notification",
      icon: FiBell,
    },
    {
      label: "Hồ sơ",
      href: "/profile/123",
      icon: FiUser,
    },
    {
      label: "Thêm",
      href: "/more",
      icon: FiMoreHorizontal,
    },
  ];

  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px]">
          <SidebarLogo />
          {items.map((item) => (
            <SidebarItem
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
            />
          ))}

          <SidebarItem onClick={() => {}} icon={FiLogOut} label="Đăng xuất" />
          <SidebarTweetButton />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
