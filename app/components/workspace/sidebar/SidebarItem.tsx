"use client";

interface SidebarItemProps {
  onClick: () => void;
  label: string;
  tab: number;
  currentTab: number;
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarItemProps> = ({
  onClick,
  label,
  tab,
  currentTab,
  isOpen,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        px-4
        py-3
        hover:bg-neutral-300
        duration-300
        ease-in-out
        font-semibold
        ${!isOpen && "scale-0"}
        ${
          tab !== currentTab
            ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
            : "bg-neutral-200 text-black border-transparent"
        }`}
    >
      {label}
    </div>
  );
};

export default Sidebar;
