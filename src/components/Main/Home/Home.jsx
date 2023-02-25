import React, { Component } from "react";
import { userContext } from '../../../context/userContext'

class Home extends Component {
  constructor(props){
    super(props)
    this.nameInput = React.createRef()
  }
  static contextType = userContext

  saveName = () => {
    const { setNewName } = this.context
    if(this.nameInput.current.value.length > 0) {
      setNewName(this.nameInput.current.value)
    }
  }

  render() {
    const { name, removeName } = this.context;
    return <section>
      {!name ? 
      <div>
        <h1>Welcome!</h1>
        <h2>Introduce your name to create some posts!</h2>
      <input type="text" placeholder="Your name" ref={this.nameInput}/>
      <button onClick={this.saveName}>Get in!</button>
      </div> :<div>
      <h1>Welcome {name}!</h1>
      <button onClick={removeName}>Bring me out!</button>
      </div>
    }
    </section>;
  }
}

export default Home;
