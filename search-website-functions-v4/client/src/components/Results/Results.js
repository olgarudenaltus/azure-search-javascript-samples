import React, { useEffect, useState, useRef } from 'react';
import Result from './Result/Result';

import "./Results.css";

export default function Results(props) {

  const [copyPathFolder,setCopyPathFolder] = useState({});
  const [copyPathFile,setCopyPathFile] = useState({});
  const [showFileAlert,setShowFileAlert] = useState(false);
  const [showFolderAlert,setShowFolderAlert] = useState(false);
  const [fadeOutFileAlert, setFadeOutFileAlert] = useState(false);
  const [fadeOutFolderAlert, setFadeOutFolderAlert] = useState(false);

  let results = props.documents.map((result, index) => {
    return <Result 
        key={index} 
        document={result.document}
        setShowFileAlert={setShowFileAlert}
        setShowFolderAlert={setShowFolderAlert}
        setCopyPathFile={setCopyPathFile}
        setCopyPathFolder={setCopyPathFolder}
        showFileAlert={showFileAlert}
        showFolderAlert={showFolderAlert}
      />;
  });

  // let beginDocNumber = Math.min(props.skip + 1, props.count);
  // let endDocNumber = Math.min(props.skip + props.top, props.count);


  let beginDocNumber = Math.min(props.skip + 1, props.count);
  let endDocNumber = Math.min(props.skip + props.top, props.count);


  return (
    <div>
      <p className="results-info">Showing {beginDocNumber}-{endDocNumber} of {props.count.toLocaleString()} results</p>
      <div className="row results">
        {/* Copy file path alert */}
        {showFileAlert ? (
          <div
          className="alert alert-success d-flex align-items-center justify-content-between"
          id="copyFilePathAlert"
          >
            <div>
              <i className="bi-check-circle-fill"></i>
              <strong className="mx-2">Success!</strong>
              <div className="m-2">
                <p className="mb-0">File path has been copied to the clipboard. Opening file in browser... </p>
                <small>{copyPathFile}</small>
              </div>
            </div>
            <div>
              <button
                type="button"
                className="btn-close"
                onClick={() => setShowFileAlert(false)}
              ></button>
            </div>
          </div>
        
          ) : null}

          {/* Copy file folder alert */}
          {showFolderAlert ? (
            <div
            className="alert alert-success d-flex align-items-center justify-content-between"
            id="copyFolderPathAlert"
            >
              <div>
                <i className="bi-check-circle-fill"></i>
                <strong className="mx-2">Success!</strong>
                <div className="m-2">
                  <p className="mb-0">Folder path has been copied to the clipboard.</p>
                  <small>{copyPathFolder}</small>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowFolderAlert(false)}
                ></button>
              </div>
            </div>
          
          ) : null}

        {results}
      </div>
    </div>
  );
};
