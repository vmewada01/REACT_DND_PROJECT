import React from "react";

const DraggableComponent = ({item}) => {
  return (
    <div>
      <div
        style={{
          backgroundColor: "blue",
          color: "white",
          borderRadius: "5px solid black",
        }}
      >
        {`Item  ${item}`}
      </div>
    </div>
  );
};

export default DraggableComponent;
