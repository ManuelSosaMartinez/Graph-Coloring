import React, { useRef, useState } from "react";
import Graph from "react-graph-vis";
import "./css/graph.css";

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
    },
    // to get each node color
    // console.log(graphData.nodes.find((elem) => elem.id === node).color);
  };
  return (
    <div className="graphInfo">
      <h1>Graph color after 100 Greedys: {graphData.color}</h1>
      <h1>Number of Connected Sets : {graphData.numCCs}</h1>
      {graphData.Printable === "true" ? (
        <div>
          <ul className="colorList">
            <h1>Color List:</h1>
            {graphData.colors.map((color) => (
              <li style={{ backgroundColor: color }} />
            ))}
          </ul>
          <Graph
            graph={{ nodes: graphData.nodes, edges: graphData.edges }}
            options={options}
            events={events}
            style={{
              background: "#cfdae5",
              marginLeft: "5vw",
              marginRight: "5vw",
              width: "70vw%",
              borderRadius: "8px",
              borderWidth: "3px",
              borderStyle: "solid",
              borderColor: "#253759",
              backgroundClip: "padding-box",
            }}
          />
        </div>
      ) : (
        <h1>Sorry! This graph is too big to be printed. Try a shorter one!</h1>
      )}
    </div>
  );
}
export default CustomGraph;
