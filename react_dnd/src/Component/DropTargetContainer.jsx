import React from "react";
import { useDrag } from "react-dnd";

const DropTargetContainer = ({ id, url }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: { id: id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <img
        ref={drag}
        src={url}
        style={{
          border: isDragging ? "5px solid pink" : "0px",
          objectFit: "cover",
        }}
      />
    </>
  );
};

export default DropTargetContainer;
