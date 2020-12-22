import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import CustomGraph from "./CustomGraph";
import "./css/dropzone.css";

function UploadGraph(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [graphs, setGraphs] = useState([]);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const sendFiles = async () => {
    const url = "http://127.0.0.1:8000";
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    await fetch(url + `/graph/analize`, {
      method: "POST",
      body: formData,
    })
      .then(async (response) => {
        const responseData = await response.json();
        if (response.status !== 200) {
          if (response.status === 404) {
            alert("Error");
          } else {
            alert("Unknown Error");
          }
        } else {
          setGraphs((graphs) => [...graphs, responseData]);
        }
      })
      .catch(() => {
        alert("Disconnected");
      });
  };

  return (
    <section className="container">
      <div {...getRootProps({ className: "dropzone" })} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <aside>
          <h4>Files</h4>
          <ul>{files}</ul>
        </aside>
      </div>
      <div>
        <button onClick={() => sendFiles()}>Send Graph</button>
      </div>
      <div>
        <ul>
          {graphs.map((graph) => (
            <li>
              <h1>Graph color : {graph.color}</h1>
              <h1>Number of Convex Components : {graph.numCCs}</h1>
              <h1>Color List</h1>
              <CustomGraph graphData={graph} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
export default UploadGraph;
