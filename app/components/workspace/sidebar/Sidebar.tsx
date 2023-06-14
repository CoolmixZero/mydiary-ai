"use client";

import { useCallback, useMemo, useState } from "react";
import { BsArrowBarRight } from "react-icons/bs";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const [currentTab, setTab] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const sidebarItems = useMemo(
    () => [
      { label: "Today", onClick: () => setTab(1), tab: 1 },
      { label: "Upcoming", onClick: () => setTab(2), tab: 2 },
      { label: "Filters", onClick: () => setTab(3), tab: 3 },
      { label: "Add project", onClick: () => setTab(4), tab: 4 },
      { label: "Project 1", onClick: () => setTab(5), tab: 5 },
    ],
    []
  );

  return (
    <section
      className={`
        fixed
        h-screen
        bg-transparent
        top-24
        md:top-36
        left-0
        flex
        flex-col
        w-fit
        m-0
        items-start
        duration-500
        ease-out
        `}
    >
      <div
        onClick={toggleOpen}
        className={`
                p-2
                md:py-1
                md:px-2
                text-xl
                md:text-2xl
                flex
                flex-row
                items-center
                gap-3
                rounded-full
                cursor-pointer
                hover:shadow-md
                transition-all
                transform-gpu
                duration-500
                ${isOpen ? "rotate-180" : "rotate-360"}
            `}
      >
        {/* {isOpen ? <BsArrowBarLeft /> : <BsArrowBarRight />} */}
        <BsArrowBarRight />
      </div>

      <div
        className={`
            shadow-md
            overflow-hidden
            left-0
            top-10
            text-sm
            duration-500
            ${isOpen ? "translate-x-0" : "-translate-x-32"}
          `}
      >
        <div className={`flex flex-col cursor-pointer`}>
          <>
            <hr />
            {sidebarItems.map((item, index) => (
              <SidebarItem
                key={index}
                label={item.label}
                onClick={item.onClick}
                tab={item.tab}
                currentTab={currentTab}
                isOpen={isOpen}
              />
            ))}
          </>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
