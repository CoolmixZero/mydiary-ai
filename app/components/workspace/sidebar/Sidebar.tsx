"use client";

import { useCallback, useMemo, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import SidebarItem from "./SidebarItem";
import { IoMdToday, IoMdCalendar, IoMdAdd} from "react-icons/io";
import { BiFilter } from "react-icons/bi";

const Sidebar = () => {
  const [currentTab, setTab] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const sidebarItems = useMemo(
    () => [
      { label: "Today", icon: IoMdToday, onClick: () => setTab(1), tab: 1 },
      { label: "Upcoming", icon: IoMdCalendar, onClick: () => setTab(2), tab: 2 },
      { label: "Filters", icon: BiFilter, onClick: () => setTab(3), tab: 3 },
      { label: "Add project", icon: IoMdAdd, onClick: () => setTab(4), tab: 4 },
      // { label: "Project 1", onClick: () => setTab(5), tab: 5 },
    ],
    []
  );

  return (
    <section
      className={`
        select-none
        fixed
        h-screen
        bg-gradient-to-r from-blue-500/30 via-teal-400/30 to-transparent
        left-0
        flex
        flex-col
        items-end
        w-fit
        md:w-[10rem]
        duration-500
        ease-out 
        z-20
        ${isOpen ? "translate-x-0" : "-translate-x-24"}
      `}
    >
    {/* <div 
      className="
        relative
        p-1
        md:py-1
        md:px-2
        mr-4
        text-xl
        md:text-2xl
        cursor-pointer
        bg-transparent
        text-end
        w-fit
        duration-0
      "
    >
      {isOpen ? (
        <BsArrowBarRight onClick={toggleOpen} />
      ) : (
        <BsArrowBarLeft onClick={toggleOpen} />
      )}
    </div> */}
    <div
        onClick={toggleOpen}
        className="
          flex
          flex-row
          w-full
          items-center
          justify-between
          cursor-pointer
          px-4
          py-3
        "
      >
        <p className="inline-block align-text-bottom text-md font-bold">Sidebar</p>
        <div
          className="
            text-xl
            p-2
          "
        >
          {isOpen ? (
            <BsArrowLeftCircle />
          ) : (
            <BsArrowRightCircle />
          )}
        </div>
      </div>
      <div
        className={`
            overflow-hidden
            left-0
            text-sm
            duration-300
            w-full
          `}
      >
        <div className="flex flex-col cursor-pointer ">
          <>
            <hr className="border-black mx-3" />
            {sidebarItems.map((item, index) => (
              <SidebarItem
                key={index}
                label={item.label}
                onClick={item.onClick}
                tab={item.tab}
                icon={item.icon}
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
