import React from "react";
import "./AppBar.css";

const AppBar = () => {
  return (
    <div className="appBar">
      <h2 className="logoName">KredX</h2>
      <div className="menuItems">
        <a href="https://www.kredx.com/">Menu 1</a>
        <a href="https://www.kredx.com/">Menu 2</a>
        <a href="https://www.kredx.com/">Menu 3</a>
        <a href="https://www.kredx.com/">Menu 4</a>
        <a href="https://www.kredx.com/">Menu 5</a>
      </div>
    </div>
  );
};

export default AppBar;



