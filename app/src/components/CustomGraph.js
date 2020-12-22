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
    interaction: { hover: true },
    height: "500px",
  };
  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    },
    hoverNode: function (event) {
      var node = event.node;
      console.log(graphData.nodes.find((elem) => elem.id === node).color);
    },
  };
  return (
    <div>
      <Graph
        graph={{ nodes: graphData.nodes, edges: graphData.edges }}
        options={options}
        events={events}
        style={{
          background: "#c0d9d9",
          marginLeft: "15%",
          width: "70%",
          borderRadius: "0px",
          borderWidth: "3px",
          borderStyle: "solid",
          borderColor: "#253759",
          backgroundClip: "padding-box",
        }}
      />
    </div>
  );
}
export default CustomGraph;
