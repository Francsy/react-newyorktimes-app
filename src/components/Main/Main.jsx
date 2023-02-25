import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Home'
import ListNews from './ListNews'
import Form from './Form'

class Main extends Component {
  render() {
    return <main>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/list' element={<ListNews />}/>
      <Route path='/form' element={<Form />}/>
      </Routes>
    </main>;
  }
}

export default Main;
