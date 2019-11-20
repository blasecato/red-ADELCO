import React from 'react';
import './main.scss';
import { BrowserRouter as Router, Route} from "react-router-dom";

import Home from "../src/scenes/Home";
import Login from "../src/scenes/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/login/" component={Login} /> 
      </Router>
    </div>
  );
}

export default App;
