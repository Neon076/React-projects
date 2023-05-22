// import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

import "./App.css";
import React, { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import About from "./components/About";
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
    }, 2000);

  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#001a34";
      showAlert("Dark Mode is enabled", "Success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode is enabled", "Success");
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title='TextUtils'
          aboutText='About TextUtil'
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <Routes>
          <Route path='/about' element={<About mode={mode}/>} />

          <Route
            path='/'
            element={
              <TextForm
                heading='Enter the to analyze below : '
                mode={mode}
                showAlert={showAlert}
              />
            }
          />
        </Routes>
      </Router>
    </> //jsx formating i.e we cannot write 2 tags adjacent in reactjs
    // so that we do jsx formating i.e write everything between empty tags
  );
}

export default App;
