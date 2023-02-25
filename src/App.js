import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import { BrowserRouter } from 'react-router-dom';
import { userContext } from './context/userContext'
import { useState } from 'react'

function App() {

  const [name, setName] = useState('')
  const setNewName = name => setName(name);
  const removeName = () => setName('')

  const userData = {
    name,
    setNewName,
    removeName
  }

  return (
    <div className="App">
      <userContext.Provider value={userData}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
      </userContext.Provider>
      <Footer />
    </div>
  );
}

export default App;

/* 

************
Version with class:


import './App.css';
import React from 'react'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { BrowserRouter } from  'react-router-dom';
import { userContext } from './context/userContext';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };

    this.data = {
      name: this.state.name,
      setNewName: this.setNewName
    }
  }

  setNewName = (name) => {
    this.setState({ name }, () => {
      this.data = {
        name: this.state.name,
        setNewName: this.setName
      }
    });
  }

  render() {
    return (
      <div className="App">
        <userContext.Provider value ={this.data}>
        <BrowserRouter>
          <Header />
          <Main />
        </BrowserRouter>
        </userContext.Provider>
        <Footer />
      </div>
    );
  }
}

export default App;


 */