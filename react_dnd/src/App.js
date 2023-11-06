import logo from "./logo.svg";
import "./App.css";
import { useDrag } from "react-dnd";
import { useState } from "react";
import DraggableComponent from "./Component/DraggableComponent";
import DropTargetContainer from "./Component/DropTargetContainer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Button, Typography } from "antd";

const { Title } = Typography;

function App() {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    setDroppedItems([...droppedItems, item.name]);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <Title code={true} style={{ display: "flex", justifyContent: "center" }}>
        Solve the Image Captcha
      </Title>

      <DraggableComponent />
    </DndProvider>
  );
}

export default App;
