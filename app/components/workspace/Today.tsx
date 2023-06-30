"use client";

import { SafeTodo, SafeUser } from "@/app/types";
import moment from "moment";
import TodoItem from "./TodoItem";
import AddTodo from "./AddTodo";
import { useState } from "react";
import { Reorder } from "framer-motion";

interface TodayProps {
  data: Array<SafeTodo>;
  currentUser: SafeUser;
}

// ! TODO: Recode DnD from 'framer-motion' to 'react-beautiful-dnd' - guide https://www.youtube.com/watch?v=HeNVPF_fRXI&ab_channel=DaveGray
const Today: React.FC<TodayProps> = ({data, currentUser}) => {
  const currentDate = new Date();
  const date = `${currentDate.getDate()}`;
  const month = moment(currentDate).format("MMMM");
  const weekDay = moment(currentDate).format("dddd");

  const [todos, setTodo] = useState(data);

  console.log(todos)

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
      <div 
        className="relative w-full h-full"
      >
      <Reorder.Group 
        as="ol"
        axis="y" 
        values={todos} 
        onReorder={setTodo}
        className="
          flex 
          flex-col 
          gap-3
          w-full 
          h-fit 
          z-20
        "
      >
        {todos.map((todo: any) => (
          <TodoItem 
            currentUser={currentUser}
            key={todo.id} 
            data={todo}
          />
        ))}
      </Reorder.Group>
      <AddTodo />
      </div>
    </div>
  );
};

export default Today;