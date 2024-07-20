import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bulma/css/bulma.css';
import Signup from "./component/Signup";
import Login from "./component/Login";
import Home from "./component/Home";




function App() {
  return (
      <Router>
          <Routes>
              <Route path="/" Component={Home} />
              <Route path="/login" Component={Login} />
              <Route path="/signup" Component={Signup} />
          </Routes>
      </Router>
  );
}

export default App;
