import React from 'react';
import logo from '../../assets/images/logo.svg';
import './App.css';
import { BrowserRouter ,Route} from "react-router-dom";
import Home from "../Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter >
          <Route path='/' component={Home} />
      </BrowserRouter>
    </div>
  );
}

export default App;
