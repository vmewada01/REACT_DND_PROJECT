import React from "react";
import { useDrop } from "react-dnd";

const DropTargetContainer = ({ onDrop }) => {
  const [, ref] = useDrop({
    accept: "DRAGGABLE_ITEM", // Specify the type of item that can be dropped here
    drop: (item) => {
      onDrop(item); // Callback function to handle the dropped item
    },
  });

  return (
    <div
      ref={ref}
      style={{
        border: "1px dashed #000",
        padding: "16px",
      }}
    >
      Drop here
    </div>
  );
};

export default DropTargetContainer;
