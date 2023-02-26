import React, { Component } from "react";
import { userContext } from '../../../context/userContext'
import { Navigate } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';




class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSubmitted: false
    }
  }

  static contextType = userContext;

  submitArticle = (e) => {
    e.preventDefault()
    const title = e.target.title.value;
    const section = e.target.section.value;
    const abstract = e.target.abstract.value;
    const url = e.target.url.value;
    const img = e.target.img.value;
    if (title && section && abstract && img) {
      const { name } = this.context;
      const newPost = {
        title,
        section,
        abstract,
        url: url || 'https://www.nytimes.com/',
        authorLine: name ? `By ${name}` : 'By anonymous author',
        date: this.getDate(),
        img
      }
      this.props.addNew(newPost);
      this.setState({ isSubmitted: true })
    } else {
      alert('Your post needs more information')
    }
  }

  getDate = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = String(currentDate.getMonth()).padStart(2, 0)
    const todayDate = String(currentDate.getDate()).padStart(2, 0)
    return `${currentYear}-${currentMonth}-${todayDate}`
  }

  render() {
    return this.state.isSubmitted ? <Navigate to='/list' /> : <section className="form">
      <h1>Post your article:</h1>
      <form onSubmit={this.submitArticle} >
        <Box sx={{ minWidth: 120 }} >
        <TextField required id="standard-required" type="text" label="Title" name="title" margin="normal" />
        <TextField required id="standard-required" type="url" label="Photo url" name="img" margin="normal" />
        <TextField  id="standard-required" type="url" label="Article url" name="url" margin="normal" />
        <TextField required id="standard-multiline-static" label="Abstract" multiline rows={4} name="abstract" margin="normal"/>
        <FormControl className="form-select" variant="standard" sx={{ m: 1, maxWidth: 120 }} >
          <InputLabel id="demo-simple-select-filled-label">Section*</InputLabel>
          <Select labelId="demo-simple-select-filled-label" id="demo-simple-select-filled" name="section" label="Section" >
            <MenuItem>
              <em>None</em>
            </MenuItem>
            <MenuItem value="Arts">Arts</MenuItem>
            <MenuItem value="Books">Books</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Health">Health</MenuItem>
            <MenuItem value="Movies">Movies</MenuItem>
            <MenuItem value="Politics">Politics</MenuItem>
            <MenuItem value="Science">Science</MenuItem>
            <MenuItem value="Technology">Technology</MenuItem>
            <MenuItem value="Travel">Travel</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit" margin="normal">Post!</Button>
        </Box>

        
      </form>
    </section>;
  }
}

export default Form;


/* 
import React, { Component } from "react";
import { userContext } from '../../../context/userContext'
import { Navigate } from 'react-router-dom'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isSubmitted: false
    }
  }

  static contextType = userContext;

  submitArticle = (e) => {
    e.preventDefault()
    const title = e.target.title.value;
    const section = e.target.section.value;
    const abstract = e.target.abstract.value;
    const url = e.target.url.value;
    const img = e.target.img.value;
    if (title && section !== 'Section' && abstract && img) {
      const { name } = this.context;
      const newPost = {
        title,
        section,
        abstract,
        url: url || 'https://www.nytimes.com/',
        authorLine: name ? `By ${name}` : 'By anonymous author',
        date: this.getDate(),
        img
      }
      this.props.addNew(newPost);
      this.setState({ isSubmitted: true })
    } else {
      alert('Your post needs more information')
    }
  }

  getDate = () => {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = String(currentDate.getMonth()).padStart(2, 0)
    const todayDate = String(currentDate.getDate()).padStart(2, 0)
    return `${currentYear}-${currentMonth}-${todayDate}`
  }

  render() {
    return this.state.isSubmitted ? <Navigate to='/list' /> : <section className="form">
      <form onSubmit={this.submitArticle} >
        <input type="text" name="title" placeholder="Title*" />
        <br />
        <input type="url" name="img" placeholder="Photo url*" />
        <br />
        <input type="url" name="url" placeholder="Article url" />
        <br />
        <textarea name="abstract" placeholder="Abstract*" rows="5" cols="20" />
        <br />
        <select name="section" defaultValue="Section">
          <option value="Section" disabled>Section</option>
          <option value="Arts">Arts</option>
          <option value="Books">Books</option>
          <option value="Business">Business</option>
          <option value="Food">Food</option>
          <option value="Health">Health</option>
          <option value="Movies">Movies</option>
          <option value="Politics">Politics</option>
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

 */