"use client";

import { SafeTodo, SafeUser } from "@/app/types";
import { Reorder, useDragControls } from "framer-motion";
import ReorderIcon from "./ReorderIcon";

interface TodoItemProps {
  data: SafeTodo;
  currentUser: SafeUser;
  completeTodo?: (index: number) => void;
  removeTodo?: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({
  data,
  currentUser,
  completeTodo,
  removeTodo,
}) => {
  const controls = useDragControls();

  return (
    <Reorder.Item 
      value={data} 
      dragListener={false}
      dragControls={controls}
      whileDrag={{
        scale: 1.05
      }}
      className="
          flex
          flex-row
          items-center
          gap-3
          p-3
          w-full
          bg-base-100 
          shadow-lg 
          hover:bg-gray-50
        "
    >
        <ReorderIcon dragControls={controls}/>{data.title} {data.content}
    </Reorder.Item>
  );
};

export default TodoItem;
