"use client";

import moment from "moment";
import Todos from "./Todos";

const Today = () => {
  const currentDate = new Date();
  const date = `${currentDate.getDate()}`;
  const month = moment(currentDate).format("MMMM");
  const weekDay = moment(currentDate).format("dddd");

  return (
    <div className="relative bg-white z-10 h-screen w-fit px-60 py-10 overflow-hidden ">
      <div className="flex flex-row items-start space-x-3 ">
        <h1
          className="text-xl md:text-2xl font-extrabold leading-tighter tracking-tighter mb-1"
          data-aos="zoom-y-out"
        >
          Today
        </h1>
        <p
          className="py-2 text-[0.8rem] text-gray-400/70 mb-1 font-extralight leading-tighter tracking-tighter"
          data-aos="zoom-y-out"
        >
          {weekDay} {date} {month}
        </p>
      </div>
      <hr className="w-full bg-gray-100/10 line-width shadow-lg" />
      <div className="relative bg-red-400 flex flex-col items-start space-x-3 w-full">
        <Todos />
      </div>
    </div>
  );
};

export default Today;
