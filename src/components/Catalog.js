import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import Movie from './Movie';


class Catalog extends Component {
    constructor(props) {
        super()
        this.users = props.users

    }
    changeMovieStat = (movieId) => {
        this.props.changeMovieStat(movieId)
    }


    render() {
        let movies = this.props.movies
        return (
        <div id="catalog-container">
            <div id='rented-container'>
            {movies.map(m => {
                    if(m.isRented) {
                    return(
                        <div className='movie-catalog'>
                            <Movie data={m} changeMovieStat={this.changeMovieStat}/>
                        </div>
                    )}
                })}
            </div>

            <hr></hr>

            <div id='unrented-container'>
                {movies.map(m => {
                    if(!m.isRented) {
                    return(
                        <div className='movie-catalog'>
                            <Movie data={m} changeMovieStat={this.changeMovieStat}/>
                        </div>
                    )}
                })}
            </div>
            
        </div>
        )
            
        
    }
}

export default Catalog;
