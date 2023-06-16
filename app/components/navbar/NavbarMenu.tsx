"use client";

import { BiSearch } from "react-icons/bi";

const NavbarMenu = () => {
  return (
    <div
      className="
            flex
            flex-row
            items-center
            justify-between
            space-x-2
        "
    >
      <div
        className="
            text-sm
            font-semibold
            px-6

            py-2
            rounded-full
            shadow-sm
            hover:shadow-md
            transition
            cursor-pointer
        "
      >
        Worksheets
      </div>
      <div
        className="
            hidden
            sm:block
            text-sm
            font-semibold
            px-6
            border-x-[1px]
            flex-1
            text-center

            py-2
            rounded-full
            shadow-sm
            hover:shadow-md
            transition
            cursor-pointer
        "
      >
        Analysis
      </div>
      {/* <div
          className="
            text-sm
            pl-6
            pr-2
            text-gray-600
            flex
            flex-row
            items-center
            gap-3

            py-2
            rounded-full
            shadow-sm
            hover:shadow-md
            transition
            cursor-pointer
        "
        >
          <div
            className="
              hidden sm:block
            "
          >
            Search
          </div>
        </div>*/}
      <div
        className="
            hidden
            sm:block
            text-sm
            font-semibold
            px-6
            border-x-[1px]
            flex-1
            text-center

            py-2
            rounded-full
            shadow-sm
            hover:shadow-md
            transition
            cursor-pointer
        "
      >
        Templates
      </div>
      <div
        className="
                text-sm 
                pl-2
                pr-2
                p-2
                py-2
                rounded-full
                shadow-sm
                hover:shadow-md
                transition
                cursor-pointer
                bg-blue-400
                text-white
            "
      >
        <BiSearch size={18} />
      </div>
    </div>
  );
};

export default NavbarMenu;
