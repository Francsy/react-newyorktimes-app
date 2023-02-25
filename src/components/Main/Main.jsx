import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Home'
import ListNews from './ListNews'
import Form from './Form'

class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ourArticles: []
    }
  }

  addNew = article => this.setState({ ourArticles: [article, ...this.state.ourArticles]})
  deleteOwnPost = article => {
    const chosenPost = this.state.ourArticles.find( post => post === article )
    if (chosenPost) {
      const remainingArticles = this.state.ourArticles.filter(post => post !== chosenPost)
      this.setState({ourArticles: [ ...remainingArticles ]})
    }
  }

  render() {
    return <main>
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/list' element={<ListNews deleteOwnPost={this.deleteOwnPost} ourArticles={this.state.ourArticles} />} />
      <Route path='/form' element={<Form addNew={this.addNew} />} />
      </Routes>
    </main>;
  }
}

export default Main;
