import React, { useState } from "react";
import { useDrop } from "react-dnd";
import DropTargetContainer from "./DropTargetContainer";
// import Imag1 from "./"

const DraggableComponent = () => {
  const [boardList, setBoardList] = useState([]);
  const picturesList = [
    {
      id: 1,

      url: "../1.jpg",
    },
    {
      id: 2,
      url: "../4.jpg",
    },
    {
      id: 3,
      url: "../2.jpg",
    },
    {
      id: 4,
      url: "../3.jpg",
    },
  ];

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addImageToBoard(item.id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addImageToBoard = (id) => {
    const picList = picturesList.filter((item) => id === item.id);
    setBoardList((board) => [...board, picList[0]]);
  };

  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
      <div
        className="Picture"
        style={{
          background: "green",
          margin: "10px",
          width: "600px",
          height: "500px",
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
          margin: "auto",

          gap: "1rem",
          gridTemplateRows: "repeat(2,1fr)",
          gridTemplateColumns: "repeat(2,1fr)",
        }}
      >
        {picturesList.map((picture) => (
          <DropTargetContainer url={picture.url} id={picture.id} />
        ))}
      </div>
      <div
        className="Board"
        ref={drop}
        style={{
          backgroundColor: "blue",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "column",
          margin: "10px",
          gap: "5px",
          width: "600px",
          height: "500px",
          border: "2px solid black",
        }}
      >
        {boardList?.map((picture) => (
          <DropTargetContainer url={picture.url} id={picture.id} />
        ))}
      </div>
    </div>
  );
};

export default DraggableComponent;
