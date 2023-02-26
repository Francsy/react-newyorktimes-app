import React, { Component } from "react";
import { userContext } from '../../../context/userContext'
import Button from '@mui/material/Button';


class Home extends Component {
  constructor(props) {
    super(props)
    this.nameInput = React.createRef()
  }
  static contextType = userContext

  saveName = () => {
    const { setNewName } = this.context
    if (this.nameInput.current.value.length > 0) {
      this.nameInput.current.value.length < 20 ? setNewName(this.nameInput.current.value) : alert('Your name must have less than 20 characters')
    }
  }

  render() {
    const { name, removeName } = this.context;
    return !name ?
      <section className="home">
        <h1>Welcome!</h1>
        <h2>Introduce yourself to start posting your own news!</h2>
        <div className="__home-input-div">
          <input required type="text" className="input" ref={this.nameInput} />
          <span className="bar"></span>
          <label className="label">
          <span className="label-char" style={{ "--index": 0 }}>Y</span>
            <span className="label-char" style={{ "--index": 1 }}>o</span>
            <span className="label-char" style={{ "--index": 2 }}>u</span>
            <span className="label-char" style={{ "--index": 3 }}>r</span>
            <span className="label-char" style={{ "--index": 4 }}>&nbsp;</span>
            <span className="label-char" style={{ "--index": 5 }}>N</span>
            <span className="label-char" style={{ "--index": 6 }}>a</span>
            <span className="label-char" style={{ "--index": 7 }}>m</span>
            <span className="label-char" style={{ "--index": 8 }}>e</span>
          </label>
        </div>
        <Button variant="contained" onClick={this.saveName} >Get in!</Button>
      </section> :
      <section className="home">
        <h1>Welcome {name}!</h1>
        <Button variant="contained" onClick={removeName} >Bring me out!</Button>
      </section>;
  }
}

export default Home;



/* 
import React, { Component } from "react";
import { userContext } from '../../../context/userContext'

class Home extends Component {
  constructor(props) {
    super(props)
    this.nameInput = React.createRef()
  }
  static contextType = userContext

  saveName = () => {
    const { setNewName } = this.context
    if (this.nameInput.current.value.length > 0) {
      this.nameInput.current.value.length < 20 ? setNewName(this.nameInput.current.value) : alert('Your name must have less than 20 characters')
    }
  }

  render() {
    const { name, removeName } = this.context;
    return !name ?
      <section className="home">
        <h1>Welcome!</h1>
        <h2>Introduce your name to create some posts!</h2>
        <input type="text" placeholder="Your name" ref={this.nameInput} />
        <button onClick={this.saveName}>Get in!</button>
      </section> :
      <section className="home">
        <h1>Welcome {name}!</h1>
        <button onClick={removeName}>Bring me out!</button>
      </section>;
  }
}

export default Home;
 */