import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <div data-ns-test attribute="project-name">name</div>
      <div data-ns-test attribute="project-description">description</div>
    </div>
  )
}


export default App;
