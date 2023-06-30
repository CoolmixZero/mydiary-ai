"use client";

import { SafeTodo, SafeUser } from "@/app/types";

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
  return (
    <div>{data.title} {data.content}</div>
  );
};

export default TodoItem;
