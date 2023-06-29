"use client";

import { IconType } from "react-icons/lib";
import SidebarIcon from "./SidebarIcon";

interface SidebarItemProps {
  onClick: () => void;
  label: string;
  tab: number;
  icon: IconType;
  currentTab: number;
}

const Sidebar: React.FC<SidebarItemProps> = ({
  onClick,
  label,
  tab,
  icon,
  currentTab,
}) => {
  return (
    <div 
      className="
          transition-all 
          delay-75 
          h-full 
          w-full
          bg-transparent
        ">
      <div
        onClick={onClick}
        className={`
          flex
          flex-row
          items-center
          justify-between
          px-4
          py-3
          text-sm
          font-semibold
          ${
            tab !== currentTab
              ? "bg-transparent"
              : "bg-gradient-to-r from-blue-500/40 via-teal-400/40 to-transparent"
          }`}
      >
          <p className="inline-block align-text-bottom">{label}</p> <SidebarIcon icon={icon}/>
      </div>
    </div>
  );
};

export default Sidebar;
