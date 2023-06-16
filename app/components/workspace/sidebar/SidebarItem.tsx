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
      onClick={onClick}
      className={`
        px-4
        py-3
        hover:bg-neutral-300
        font-semibold
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
