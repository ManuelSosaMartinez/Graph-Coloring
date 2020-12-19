import React, { useRef, useState } from "react";
import Graph from "react-graph-vis";

function CustomGraph({ graphData }) {
  const options = {
    edges: {
      color: "#000000",
      arrows: { to: { enabled: false } },
    },
    nodes: {
      shape: "circle",
    },
    physics: {
      repulsion: {
        nodeDistance: 20,
      },
      barnesHut: {
        springConstant: 0,
        damping: 0.9,
      },
    },
    height: "500px",
  };
  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    },
  };
  return (
    <div>
      <Graph
        graph={{ nodes: graphData.nodes, edges: graphData.edges }}
        options={options}
        events={events}
      />
    </div>
  );
}
export default CustomGraph;
