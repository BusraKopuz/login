import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import Signup from "./component/Signup";
import Login from "./component/Login";
import backgroundImage from './component/images/img.jpg';



function App() {

  const handleSignup = (formData) => {
    console.log("Form submitted with data:", formData);
};

  return (
    <div className="App">

      <Signup onSubmit={handleSignup} />
      
    </div>
  );
}

export default App;
