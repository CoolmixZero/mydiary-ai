"use client";

import { SafeTodo, SafeUser } from "@/app/types";
import moment from "moment";
import TodoItem from "./TodoItem";

interface TodayProps {
  data: Array<SafeTodo>;
  currentUser: SafeUser;
}

const Today: React.FC<TodayProps> = ({data, currentUser}) => {
  const currentDate = new Date();
  const date = `${currentDate.getDate()}`;
  const month = moment(currentDate).format("MMMM");
  const weekDay = moment(currentDate).format("dddd");

  return (
    <div className="relative z-10 h-screen w-full px-60 py-10 overflow-hidden ">
      <div className="flex flex-row space-x-3">
        <h1
          className="text-xl md:text-2xl font-extrabold leading-tighter tracking-tighter mb-1"
        >
          Today
        </h1>
        <p
          className="py-2 text-[0.8rem] text-gray-400/70 mb-1 font-light leading-tighter tracking-tighter"
        >
          {weekDay} {date} {month}
        </p>
      </div>
      <hr className="w-full bg-gray-100/10 line-width shadow-lg" />
      <div className="relative bg-red-400 flex flex-col items-start space-x-3 w-full h-full">
      {data.map((listing: any) => (
            <TodoItem 
              currentUser={currentUser}
              key={listing.id}
              data={listing}
            />
          ))}
      </div>
    </div>
  );
};

export default Today;