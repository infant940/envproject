import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AddKey from "./AddKey";
import ViewKey from "./ViewKey";
import Home from "./Home";
import UploadKey from "./UploadKey";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/add" component={AddKey} />
      <Route path="/ViewKey" component={ViewKey} />
      <Route path="/UploadKey" component={UploadKey} />
    </Router>
  );
}

export default App;
