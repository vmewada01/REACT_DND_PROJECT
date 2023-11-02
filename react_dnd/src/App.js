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
        <h1>React DnD Example</h1>
        <div style={{ display: "flex" }}>
          <div style={{ marginRight: "20px" }}>
            <h2>Draggable Items</h2>
            <DraggableComponent name="Car" />
          </div>
          <div>
            <h2>Drop Target</h2>
            <DropTargetContainer onDrop={handleDrop} />
            <div>
              <h3>Dropped Items</h3>
              <ul>
                {droppedItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
