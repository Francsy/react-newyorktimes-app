import React, { Component } from "react";

class Card extends Component {
  render() {
    return <article>
      <img src={this.props.new.img} alt="" />
      <h2>{this.props.new.title}</h2>
      <h3>{this.props.new.date} - {this.props.new.section} - {this.props.new.authorLine}</h3>
      <p>{this.props.new.abstract}</p>
      <button onClick={this.props.delete}>Remove</button>
    </article>;
  }
}

export default Card;
