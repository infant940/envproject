import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import AddKey from "./AddKey"
import ViewKey from "./ViewKey";
import Home from "./Home";


function App() {
  return (
 <Router>
       <Route path="/home"  component={Home} />
       <Route path="/add"  component={AddKey} />
      <Route path="/ViewKey" component={ViewKey} />      
          </Router>
   
  );
}

export default App;