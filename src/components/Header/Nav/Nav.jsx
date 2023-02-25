import React, { Component } from "react";
import { Link } from 'react-router-dom'

class Nav extends Component {
  render() {
    return <nav>
      <Link to='/'><button>Home</button></Link>
      <Link to='/list'><button>News!</button></Link>
      <Link to='/form'><button>Post!</button></Link>
    </nav>
  }
}

export default Nav;
