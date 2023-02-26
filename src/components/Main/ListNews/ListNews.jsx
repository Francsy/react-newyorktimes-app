import React, { Component } from "react";
import axios from 'axios'
import Card from './Card'
import {v4 as uuidv4} from 'uuid'

class ListNews extends Component {
  constructor (props){
    super(props)
    this.state = {
      news: [],
      failed: false
    }
  }

  async componentDidMount() {
    try {
      
      const res = await axios.get(`https://api.nytimes.com/svc/topstories/v2/science.json?api-key=${process.env.REACT_APP_NYT}`)
      let data = await res.data.results
      data = data.filter((article, i) => i >= (data.length - 5))
      const nytNews = data.map(article =>{
        const newArticle = { //Finish it
          title: article.title,
          section: this.capTransform(article.section),
          abstract: article.abstract,
          url: article.url || 'https://www.nytimes.com/',
          authorLine: article.byline,
          date: article.published_date.slice(0, 10),
          img: article.multimedia[1].url || 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'
        }
        return newArticle
      })
      if (this.props.ourArticles.length > 0) {
        this.setState({news: [...this.props.ourArticles, ...nytNews]})
      } else {
        this.setState({news: [...nytNews]})
      }
    } catch (err) {
      this.setState({ failed: true})    
    }
  }
  capTransform = text => text.charAt(0).toUpperCase() + text.slice(1)
  deleteNew = i => {
    this.props.deleteOwnPost(this.state.news[i])
    const remainingNews = this.state.news.filter((article, j) => i !== j)
    this.setState({news: remainingNews})
  }
  printNews = newsArr => newsArr.map((article, i) => <Card new={article} delete={() => this.deleteNew(i)} key={uuidv4()}/>) // acabar


  render() {
    return <section className="listnews">
    {this.printNews(this.state.news)}
    {this.state.failed ? <p>Failed to get news from New York Times</p> : <></>}

    </section>;
  }
}

export default ListNews;
