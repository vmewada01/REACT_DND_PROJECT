import React, { useEffect, useState } from "react";
import { useDrop } from "react-dnd";
import DropTargetContainer from "./DropTargetContainer";
import { Button, Typography, message } from "antd";

const { Title } = Typography;
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
    if (boardList.length < 4) {
      setBoardList((board) => [...board, picList[0]]);
    }
  };

  const handleSubmit = () => {
    if (boardList.length < 4) {
      return message.error("Please drop all the images");
    }

    const array = [];
    boardList?.map((item) => array.push(Number(item.id)));
    const answer_array = [2, 4, 3, 1];

    let areEqual = true;

    if (array.length === answer_array.length) {
      for (let i = 0; i < array.length; i++) {
        if (array[i] !== answer_array[i]) {
          areEqual = false;
          break;
        }
      }
    } else {
      areEqual = false;
    }

    if (areEqual) {
      message.success("You have successfully solve the image captcha");
    } else {
      message.info("Sorry you have failed to arranged the captcha");
    }
  };
  return (
    <div>
      <Title
        italic={true}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Button
          style={{ textAlign: "center" }}
          type="primary"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Title>

      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <div
          className="Picture"
          style={{
            margin: "10px",
            width: "600px",
            display: "grid",
            gap: "5px",
            justifyContent: "center",
            alignContent: "center",
            margin: "auto",
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
            backgroundColor: "gray",
            display: "grid",
            margin: "10px",
            width: "600px",
            height: "600px",
            border: "2px solid black",
            justifyContent: "center",
            alignContent: "center",
            margin: "auto",
            gridTemplateRows: "repeat(2,1fr)",
            gridTemplateColumns: "repeat(2,1fr)",
          }}
        >
          {boardList?.map((picture) => (
            <DropTargetContainer url={picture.url} id={picture.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DraggableComponent;
