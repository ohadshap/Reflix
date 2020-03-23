import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'


class MovieDetail extends Component {
    findMovie = movieId => {
        return this.props.movies.find(m => m.id == movieId) 
    }

    render() {
        console.log(this.props.match.params.id)
        let movie = this.findMovie(this.props.match.params.id)
        console.log(movie);
        return (
            <div className='movieData'>
                <h2>{movie.title}</h2>
                <div className='movieDataImg' style={{backgroundImage: `url(${movie.img})`}}></div>
                <p>{movie.descrShort}</p>
            </div>)
            
        
    }
}

export default MovieDetail;
