"use client";


import { IconType } from "react-icons/lib";

interface SidebarIconProps {
  icon: IconType;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon: Icon }) => {
  return (
    <Icon className="
      h-full
      w-fit
      text-xl
      p-2
    "
  />
  ); 
};

export default SidebarIcon;
