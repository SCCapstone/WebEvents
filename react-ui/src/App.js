import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import CSVImport from "./CSVImport";
import TitleBar from "./TitleBar";
import SheetJSApp from "./sheet";
import RequestServer from "./RequestServer";
import FileUpload from "./FileUpload";
import Options from "./Options";

function App {
  const [message, setMessage] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [url, setUrl] = useState('/api');

  const fetchData = useCallback(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error(`status ${response.status}`);
        }
        return response.json();
      })
      .then(json => {
        setMessage(json.message);
        setIsFetching(false);
      }).catch(e => {
        setMessage(`API call failed: ${e}`);
        setIsFetching(false);
      })
  }, [url]);

  useEffect(() => {
    setIsFetching(true);
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <TitleBar />
          <SheetJSApp />
          <RequestServer />
          <FileUpload />
          <Options />
    </div>
  );
};

export default App;
