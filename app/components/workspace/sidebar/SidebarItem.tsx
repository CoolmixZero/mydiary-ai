"use client";

interface SidebarItemProps {
  onClick: () => void;
  label: string;
  tab: number;
  currentTab: number;
}

const Sidebar: React.FC<SidebarItemProps> = ({
  onClick,
  label,
  tab,
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
          px-4
          py-3
          font-semibold
          ${
            tab !== currentTab
              ? "bg-transparent"
              : "bg-gradient-to-r from-blue-500/40 via-teal-400/40 to-transparent"
          }`}
      >
        {label}
      </div>
    </div>
  );
};

export default Sidebar;
