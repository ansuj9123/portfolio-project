import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contacts from "./components/Contacts";
import Project from "./components/Project";
import Message from "./components/Message";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/AboutMe" element={<About />}></Route>
          <Route exact path="/skills" element={<Skills />}></Route>
          <Route exact path="/Project" element={<Project />}></Route>
          <Route exact path="/Contacts" element={<Contacts />}></Route>
          <Route exact path="/Message" element={<Message />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
