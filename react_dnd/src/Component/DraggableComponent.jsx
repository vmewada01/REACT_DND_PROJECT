import React, { useState } from "react";
import { useDrop } from "react-dnd";
import DropTargetContainer from "./DropTargetContainer";

const DraggableComponent = () => {
  const [boardList, setBoardList] = useState([]);
  const picturesList = [
    {
      id: 1,
      url: "https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?b=1&s=170667a&w=0&k=20&c=cae8s_ncw2axGBVrD5vJR6DBqmVbQkKfAP1ecKUvQzQ=",
    },
    {
      id: 2,
      url: "https://media.istockphoto.com/id/1434947710/photo/businessman-headphones-and-laptop-webinar-in-office-with-coffee-on-table-video-call-or.webp?b=1&s=170667a&w=0&k=20&c=mfRJ9spkAZVKJdpEDFhjh6x06kYdLFhy2TaqXD_wYfI=",
    },
    {
      id: 3,
      url: "https://media.istockphoto.com/id/1438185814/photo/college-student-asian-man-and-studying-on-laptop-at-campus-research-and-education-test-exam.webp?b=1&s=170667a&w=0&k=20&c=GB278ll5DUQDJx4WnhrD-DCwjjjfTfyVCB7jmGz5fmQ=",
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
