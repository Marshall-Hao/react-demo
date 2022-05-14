import React from "react";
import "./App.css";
import ListItem from "./components/listItem";

function App() {
  return (
    <>
      <div className="container">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
      <div className="container">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </>
  );
}

export default App;
