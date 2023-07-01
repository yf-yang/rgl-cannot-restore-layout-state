import "./App.css";
import { useState } from "react";
import GridLayout from "react-grid-layout";

function App() {
  const [prevLayout, setPrevLayout] = useState([]);
  const [layout, setLayout] = useState([
    { i: "child", x: 0, y: 0, h: 2, w: 2 },
  ]);

  return (
    <>
      <GridLayout
        width={1000}
        cols={6}
        maxRows={6}
        rowHeight={40}
        onResizeStop={(newLayout) => {
          setPrevLayout(() => layout);
          setLayout(() => newLayout);
        }}
        onDragStop={(newLayout) => {
          setPrevLayout(() => layout);
          setLayout(() => newLayout);
        }}
      >
        {layout.map((item) => (
          <div key={item.i} data-grid={item}>
            ITEM
          </div>
        ))}
      </GridLayout>
      <div>Prev Layout:</div>
      <div>{JSON.stringify(prevLayout)}</div>
      <div>Current Layout:</div>
      <div>{JSON.stringify(layout)}</div>
      <button
        onClick={() => {
          setLayout(prevLayout);
        }}
      >
        SET TO PREV
      </button>
    </>
  );
}

export default App;
