import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Home'
import ListNews from './ListNews'
import Form from './Form'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      newArticles: []
    }
  }

  addNew = article => this.setState({ news: [article, ...this.state.newArticles]})


  render() {
    return <main>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/list' element={<ListNews newArticles={this.state.newArticles} />} />
      <Route path='/form' element={<Form addNew={this.addNew} />} />
      </Routes>
    </main>;
  }
}

export default Main;
