import React from 'react';
import { Route } from "react-router-dom";
import './App.css';
import Dashboard from "./components/Dashboard.js"
import Rhymes from "./components/Rhymes"



function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Dashboard}/>
      <Route path="/rhymes" component={Rhymes}/>
    </div>
  );
}

export default App;
