"use client";

import { DragDropContext } from "react-beautiful-dnd";

const Todos = () => {
  return (
    <div className="bottom-100 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Hero content */}
      <div className="pt-24 pb-8 md:pt-32 md:pb-12">
        {/* Section header */}
        <div className="pb-12 md:pb-16">
          <h1
            className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
            data-aos="zoom-y-out"
          ></h1>
        </div>
      </div>
    </div>
  );
};

export default Todos;
