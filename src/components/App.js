import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
  return (
    <div id="main">
      <h1 data-ns-test-attribute="project-name">name</h1>
      <p data-ns-test-attribute="project-description">description</p>
    </div>
  )
}


export default App;

