import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const tooglesMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";

      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";

      showAlert("Light mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" mode={mode} tooglesMode={tooglesMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route
            path="/haroon-test-project"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            }
          />
          <Route path="/haroon-test-project/about" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
