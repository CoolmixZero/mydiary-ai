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
        bg-white
        border-r
        left-0
        flex
        flex-col
        w-fit
        md:w-[10rem]
        m-0
        items-start
        duration-500
        ease-out 
        z-20
        ${isOpen ? "translate-x-0" : "-translate-x-48"}
      `}
    >
      <BsArrowBarRight
        onClick={toggleOpen}
        className={`
                  relative
                  p-1
                  md:py-1
                  md:px-2
                  text-3xl
                  md:text-5xl
                  cursor-pointer
                  bg-transparent
                  text-blue-500
                  transition
                  w-full
                  transform-gpu
                  duration-500
                  ease
                  ${
                    isOpen
                      ? "translate-x-0 rotate-180"
                      : "translate-x-48 rotate-360"
                  }
              `}
      />
      <div
        className={`
            shadow-md
            overflow-hidden
            left-0
            top-10
            text-sm
            duration-300
            w-full
          `}
      >
        <div className="flex flex-col cursor-pointer">
          <>
            <hr />
            {sidebarItems.map((item, index) => (
              <SidebarItem
                key={index}
                label={item.label}
                onClick={item.onClick}
                tab={item.tab}
                currentTab={currentTab}
              />
            ))}
          </>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
