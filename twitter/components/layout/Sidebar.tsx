"use client";

import { FiBell, FiUser, FiHash, FiMessageCircle, 
	FiBookmark, FiList, FiHome, FiMoreHorizontal, FiLogOut } from "react-icons/fi";

import SidebarLogo from "../layout/SidebarLogo";
import SidebarItem from "../layout/SidebarItem";
import SidebarTweetButton from "../layout/SidebarTweetButton";

const Sidebar = () => {
  const items = [
    {
      label: "Home",
      href: "/",
      icon: FiHome,
    },
    {
      label: "Explore",
      href: "/explore",
      icon: FiHash,
    },
    {
      label: "Messages",
      href: "/messages",
      icon: FiMessageCircle,
    },
    {
      label: "List",
      href: "/list",
      icon: FiList,
    },
    {
      label: "Bookmarks",
      href: "/bookmarks",
      icon: FiBookmark,
    },
    {
      label: "Notification",
      href: "/notification",
      icon: FiBell,
    },
    {
      label: "Profile",
      href: "/profile",
      icon: FiUser,
    },
    {
      label: "More",
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
