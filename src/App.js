import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Contact from './components/Contact';

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode Enabled", "success")
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      document.title = "TextUtils - Light Mode"
      showAlert("Light Mode Enabled", "success")
    }
  }
  return (
    <>
      <div className="conainer">
        <BrowserRouter>
          <Navbar title="TextUtils" about="About TextUtils" mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <Routes>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Start your text editing from here" />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
