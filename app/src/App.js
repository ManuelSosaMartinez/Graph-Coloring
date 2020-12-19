import React, { useRef, useState } from "react";
import FixedGraph from "./components/FixedGraph";
import UploadGraph from "./components/UploadGraph";

function App() {
  return (
    <div>
      <UploadGraph />
      {/* <FixedGraph /> */}
    </div>
  );
}
export default App;
