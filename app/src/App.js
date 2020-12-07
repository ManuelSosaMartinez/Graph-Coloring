import React, { useRef, useState } from "react";
import FixedGraph from "./components/FixedGraph";
import UploadGraph from "./components/UploadGraph";

function App() {
  return (
    <div>
      <FixedGraph />
      <UploadGraph />
    </div>
  );
}
export default App;
