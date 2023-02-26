import React, { Component } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


class CardList extends Component {
  render() {
    return <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={this.props.new.img}
        title="Article presentation image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {this.props.new.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        {this.props.new.date} - {this.props.new.section} - {this.props.new.authorLine}
      </Typography>
        <Typography variant="body2" color="text.secondary">
        {this.props.new.abstract}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={this.props.delete} >Remove</Button>
        <Button size="small" onClick={() => window.open(this.props.new.url, '_blank')}>Visit</Button>
      </CardActions>
    </Card>
  }
}


export default CardList;





/* 
import React, { Component } from "react";

class Card extends Component {
  render() {
    return <article>
      <img src={this.props.new.img} alt="" />
      <h2>{this.props.new.title}</h2>
      <h3>{this.props.new.date} - {this.props.new.section} - {this.props.new.authorLine}</h3>
      <p>{this.props.new.abstract}</p>
      <button onClick={this.props.delete}>Remove</button>
      <button onClick={() => window.open(this.props.new.url, '_blank')}>Visit</button>
    </article>;
  }
}

export default Card; 
*/
