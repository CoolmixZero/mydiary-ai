"use client";

import { Draggable } from "react-beautiful-dnd";

interface TodosItemProps {
  id: number;
  todo: string;
  content?: string;
  index: number;
  completeTodo: (index: number) => void;
  removeTodo: (index: number) => void;
}

const TodosItem: React.FC<TodosItemProps> = ({
  id,
  todo,
  content,
  index,
  completeTodo,
  removeTodo,
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};

export default TodosItem;
