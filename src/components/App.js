import React, { Component } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "../styles/App.css";
import Search from "./Search";
import Nav from "./Nav";

toast.configure({
  autoClose: 3000,
  draggable: true,
  position: toast.POSITION.TOP_CENTER,
});

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Search />
      </div>
    );
  }
}

export default App;
