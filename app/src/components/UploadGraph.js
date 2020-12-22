import React, { useRef, useState } from "react";
import { useDropzone } from "react-dropzone";
import CustomGraph from "./CustomGraph";
import "./css/dropzone.css";

function UploadGraph(props) {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [graphs, setGraphs] = useState([]);

  const bottom = useRef(null);
  const uploader = useRef(null);
  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

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
          {
            alert("Error");
          }
        } else {
          setGraphs((graphs) => [...graphs, responseData]);
          scrollToRef(bottom);
        }
      })
      .catch(() => {
        alert("Server offline");
      });
  };

  return (
    <section ref={uploader} className="container">
      <div {...getRootProps({ className: "dropzone" })} className="dropzone">
        <input {...getInputProps()} />
        <p>Drag 'n' drop a file here, or click to select one</p>
        <h1>{files[0]}</h1>
      </div>
      <div>
        <button onClick={() => sendFiles()}>Send Graph</button>
      </div>
      <div>
        <ul className="graphList">
          {graphs.map((graph) => (
            <li className="graph">
              <CustomGraph graphData={graph} />
            </li>
          ))}
        </ul>
        <div ref={bottom}>
          {graphs.length !== 0 ? (
            <button onClick={() => scrollToRef(uploader)}>
              Try another one!
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
export default UploadGraph;
