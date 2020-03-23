import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'


class Landing extends Component {
    constructor() {
        super()
        
    }

    changeCurrUser = userId => {
        this.props.changeCurrUser()
    }

    render() {
        return (
            <div id='landing-container'>
                {this.props.users.map(u => {
                    return(
                        <Link to='/catalog'><div className='userBox' style={{backgroundColor: u.bgColor}} onClick={this.changeCurrUser}>{u.name}</div></Link>
                    )})}
            </div>)
            
        
    }
}

export default Landing;

    // rentMovie = (userId, movieId) => {
    //     let userData = [...this.state.users]
    //     userData.forEach(u => {
    //       if(u.uId === userId) {
    //         u.budjet -= 3
    //         u.rentedMovies.push(movieId)
    //       }
    //     })
    //     this.setState({users: userData})
    // }
    
    // returnMovie = (userId, movieId) => {
    //     let userData = [...this.state.users]
    //     userData.forEach(u => {
    //         if(u.uId === userId) {
    //             u.budjet += 3
    //             let index = u.rentedMovies.findIndex(m => m.id === movieId)
    //             u.rentedMovies.splice(index, 1)
    //         }
    //     })
    //     this.setState({users: userData})
    // }