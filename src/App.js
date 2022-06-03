import { useState } from 'react';
import Dropzone from "react-dropzone";
import FileImg from './fileImg';

import './App.css';

function App() {
  const [files, setFiles] = useState([]);

  const onDropHandler = (acceptedFiles) => {
    setFiles(acceptedFiles);
  }

  return (
    <div className="App">
      <Dropzone
        onDrop={onDropHandler}
        accept="image/*"
        minSize={1024}
        maxSize={3072000}
      >
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>이미지 드랍</p>
          </div>
        )}
      </Dropzone>

      {files.map((file, idx) => (
        <span key={idx}>
          <FileImg file={file} />
        </span>
      ))}
    </div>
  );
}

export default App;
