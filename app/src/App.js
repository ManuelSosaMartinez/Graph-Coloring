import React, { useRef, useState } from "react";
import FixedGraph from "./components/FixedGraph";
import UploadGraph from "./components/UploadGraph";
import "./components/css/App.css";

function App() {
  const uploader = useRef();
  const info = useRef();

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  return (
    <div>
      <div className="page">
        <p className="text">
          Welcome to my graph vertex coloring page. Send a graph (as detailed in
          the next section) and the algorithm will run 100 iterations of
          coloring with the Greedy Algorithm and reordering by color blocks.
        </p>
        <div className="btns">
          <button onClick={() => scrollToRef(info)}>
            Info about the graph
          </button>
          <button onClick={() => scrollToRef(uploader)}>Try it now!</button>
        </div>
      </div>
      <div ref={info} className="page">
        <p className="text">
          {" "}
          This algorithm uses a variation of the{" "}
          <a href="http://lcs.ios.ac.cn/~caisw/Resource/about_DIMACS_graph_format.txt">
            DIMACS format
          </a>{" "}
          as the input graph; you can check some examples{" "}
          <a href="http://mat.gsia.cmu.edu/COLOR/instances.html">here</a>. The
          only difference with that format, is that the given number of nodes
          and edges must match the given list and that the same edge cannot be
          listed twice
        </p>
        <button onClick={() => scrollToRef(uploader)}>Understood!</button>
      </div>
      <div ref={uploader} className="page">
        <UploadGraph />
      </div>
    </div>
  );
}
export default App;
