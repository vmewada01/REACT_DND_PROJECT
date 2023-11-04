import logo from "./logo.svg";
import "./App.css";
import { useDrag } from "react-dnd";
import { useState } from "react";
import DraggableComponent from "./Component/DraggableComponent";
import DropTargetContainer from "./Component/DropTargetContainer";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const [droppedItems, setDroppedItems] = useState([]);

  const handleDrop = (item) => {
    setDroppedItems([...droppedItems, item.name]);
  };
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "5px",
          }}
        >
          Drag and Drop
        </h1>
        <DraggableComponent />
      </div>
    </DndProvider>
  );
}

export default App;
