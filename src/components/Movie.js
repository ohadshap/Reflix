import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'


class Movie extends Component {
    
    changeMovieStat = () => {
        this.props.changeMovieStat(this.props.data.id)
      }

    
    render() {
    return  (
    <div className='movieImg' style={{backgroundImage: `url(${this.props.data.img})`}}>
        {this.props.data.isRented ? <div onClick={this.changeMovieStat} className='minusIcon rentBTN'>-</div> : <div onClick={this.changeMovieStat} className='plusIcon rentBTN'>+</div>}
        <Link to={`movie/${this.props.data.id}`}><div className='movieDetailLink'></div></Link>
    </div>)
       
        
    }
}

export default Movie;
