import "./App.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileLines,
  faFileCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import ResolveDuplicate from "./components/ResolveDuplicate/ResolveDuplicate";
import mock from "./assets/mock";

let recordCount = 4;

function App() {
  return (
    <div className="m-10">
      <h1 className="text-2xl">Upload Summary</h1>
      <div className="flex [&>*]:m-5">
        <FontAwesomeIcon
          icon={faFileLines}
          style={{ fontSize: "4rem", color: "orange" }}
        />
        <div className="flex flex-col">
          <h3>{mock.uploadedFileName}</h3>
          <p className="text-zinc-500">{mock.fileUploaderName}</p>
        </div>
      </div>

      <div className="flex flex-row [&>*]:m-4 bg-red-100">
        <FontAwesomeIcon icon={faFileCircleExclamation} style={{ fontSize: "2rem", color: "#ff6666" }} />
        <div className="flex flex-col">
          <h2 className="font-bold text-xl m-1">
            Some records failed to upload
          </h2>
          <p className="m-1">{mock.errorMessage}</p>
        </div>
      </div>
      <h4 className="font-bold">Duplicate conflicts ({recordCount})</h4>
      <ResolveDuplicate entries={mock} />
      <button type="button" class="focus:outline-none text-white bg-orange-400 hover:bg-yellow-500  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-4">Resolve Entries</button>
    </div>
  );
}

export default App;
