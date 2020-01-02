import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import "./AlexStyle/AlexAnimation.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Door from "./components/Door/Door";

function App() {

  const [opened, setOpened] = useState(false);

  return (
    <div className="App">
      { opened && <NavBar/>}
      <Switch>
        { opened && <Route exact path="/home" component={Home} />}
        { opened && <Route path="/projects" component={Projects} />}
        { opened && <Route path="/about" component={About} />}
        { !opened && <Route path="/">
          <Door setOpened={setOpened} />
        </Route> }
      </Switch>
    </div>
  );
}

export default App;
