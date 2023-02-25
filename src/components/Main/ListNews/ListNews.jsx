import React, { Component } from "react";
import axios from 'axios'


class ListNews extends Component {
  constructor (props){
    super(props)
    this.state = {
      news: []
    }
  }

  async componentDidMount() {
    try {
      
      const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${process.env.REACT_APP_NYT}`)
      let data = await res.data.results
      data = data.filter((article, i) => i < 5)
      const nytNews = data.map(article =>{
        const newArticle = { //Finish it
          title: 'Example'
        }
        return newArticle
      })
      if (this.props.newArticles.length > 0) {
        this.setState({news: [...this.props.newArticles, ...nytNews]})
      } else {
        this.setState({news: [...nytNews]})
      }
    } catch (error) {
      console.log(error)
    }
  }

  printNews = (newsArr) => newsArr.map((article, i) => console.log(article, i)) // acabar


  render() {
    return <div>ListNews</div>;
  }
}

export default ListNews;
