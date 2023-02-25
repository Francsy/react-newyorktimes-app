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
      <input type="text" placeholder="Your name" ref={this.nameInput}/>
      <button onClick={this.saveName}>Get in!</button>
      </div> : 
      <button onClick={removeName}>Bring me out!</button>
    }
    </section>;
  }
}

export default Home;
