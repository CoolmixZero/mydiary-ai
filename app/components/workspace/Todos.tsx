"use client";

import { useRouter } from "next/navigation";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import TodosItem from "./TodosItem";

const Todos = () => {
  const router = useRouter();

  const handleOnDragEnd = (result: DropResult) => {};

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="grid grid-col-1 gap-2 mx-auto max-w-7xl md:grid-cols-3 md:gap-4"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {/* <TodosItem /> */}
            Still working on it
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Todos;
