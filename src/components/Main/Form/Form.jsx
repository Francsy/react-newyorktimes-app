import React, { Component } from "react";

class Form extends Component {


  submitArticle = (e) => {
    e.preventDefault()
    const title = e.target.title.value;
    const section = e.target.section.value;
    const abstract = e.target.abstract.value;
    const url = e.target.url.value;
    const img = e.target.img.value;
    const newArticle = {}
  }
 

  getDate = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = String(currentDate.getMonth()).padStart(2, 0)
    const todayDate = String(currentDate.getDate()).padStart(2,0)
    return `${currentYear}-${currentMonth}-${todayDate}`
  }

  render() {
    return <section>
      <form  >
        <input type="text" name="title" placeholder="Title"/>
      <br />
      <input type="url" name="img" placeholder="Photo url"/>
        <br />
        <input type="url" name="url" placeholder="Article url"/>
        <br />
        <textarea name="abstract" placeholder="Abstract"  rows="5" cols="20" />
        <br />
        <select name="section" defaultValue="Section">
          <option value="Section" disabled>Section</option>
          <option value="Arts">Arts</option>
          <option value="Books">Books</option>
          <option value="Business">Business</option>
          <option value="Food">Food</option>
          <option value="Health">Health</option>
          <option value="Movies">Movies</option>
          <option value="Politics">Science</option>
          <option value="Science">Science</option>
          <option value="Technology">Technology</option>
          <option value="Travel">Travel</option>
        </select>
        <br />
        <input type="submit" />

      </form>
    </section>;
  }
}

export default Form;
