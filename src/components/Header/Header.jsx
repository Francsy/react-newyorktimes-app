import React, { Component } from "react";
import { userContext } from "../../context/userContext";
import Nav from './Nav'

class Header extends Component {

  static contextType = userContext;



  render() {
    const { name } = this.context;
    return <header>
      <Nav />
      {name ? <h2>{name}</h2>: <></>}
      </header>
  }
}

export default Header;
