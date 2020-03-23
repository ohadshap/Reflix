import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom'
import './App.css';
import Landing from './components/Landing'
import Catalog from './components/Catalog'
import Movie from './components/Movie';
import MovieDetail from './components/MovieDetail'


class App extends Component  {
  constructor() {
    super()
    this.state = {
      users: [
        {uId: 0, name: 'Jona',budjet: 15, rentedMovies: [], bgColor: 'red'},
        {uId: 1, name: 'Amir',budjet: 10, rentedMovies: [], bgColor: 'blue'},
        {uId: 2, name: 'Ben',budjet: 12, rentedMovies: [], bgColor: 'green'},
        {uId: 3, name: 'Danny',budjet: 20, rentedMovies: [], bgColor: 'yellow'}
      ],
      currentUser: {},
      movies: [
        { id: 0, isRented: false, title: "Tarzan", year: 1999, img: "https://vignette.wikia.nocookie.net/disney-fan-fiction/images/4/42/Tarzan_2004_cover.jpg/revision/latest?cb=20140331030811", descrShort: "Tarzan was born into wealth but raised into incredible misfortune. Shiprweck, parents mauled by a jaguar. Luckily, a troop of gorillas took him in, but the Big Daddy gorilla never took a liking to him. That is, until the end when it's too late. Why is it too late? Watch and find out." },
        { id: 1, isRented: true, title: "The Lion King", img: "https://img00.deviantart.net/b782/i/2006/207/e/7/the_lion_king_front_cd_cover_by_peachpocket285.jpg", year: 1994, descrShort: "A young lion prince named Simba is born into wealth but raised into incredible misfortune. Trickster uncle, dying father, usurpation. Luckily, an unlikely meerkat-warthog pair take him in and teach him The Ways of the Bum Life. Be prepared for ghostly hallucinations, wild baboons, creepy crawlies." },
        { id: 2, isRented: false, title: "Beauty and the Beast", year: 1991, img: "https://images-na.ssl-images-amazon.com/images/I/81etFyb9N-L._SL1500_.jpg", descrShort: "A kickass woman named Belle who does not succumb to social norms gets crap from a bunch of village idiots, chief amongst them a total tool named Gaston. Belle shows everyone how great she is when she turns a beast (not Gaston) into a man. Love ensues, but then the villagers fall trap to severe group-think mentality led by the main tool himself." },
        { id: 3, isRented: true, title: "The Sword in the Stone", year: 1963, img: "https://media.boingboing.net/wp-content/uploads/2020/01/Sword-in-the-stone.jpg", descrShort: "Arthur is a young boy who just wants to be a knight's squire. Alas, he is dubbed 'Wart' early on, and it was all downhill from there for a while. On a hunting trip he falls in on Merlin, literally. Merlin is a possibly-mentally-unstable-and-ethically-dubious Wizard that turns Arthur into a literate, at-one-point harassed squirrel. Watch to find out what the heck that means." },
        { id: 4, isRented: false, title: "Beauty and the Beast", year: 2016, img: "https://images-na.ssl-images-amazon.com/images/I/51ArFYSFGJL.jpg", descrShort: "Basically the same as the original, except now Hermi-- Emma Wattson plays Belle, fittingly so some would say, given how actively progressive she is regarding women's rights. Rumor has it that in the bonus scenes she whips out a wand and turns Gaston into a toad, but in order to watch those scenes you need to recite a certain incantation." }
    ]
    }
  }

  changeCurrUser = userId => {
    let user = this.state.users.find(u => u.uId === userId)
    this.setState({currentUser: user})
  }

  changeMovieStat = (movieId) => {
    let movies = [...this.state.movies]
    let movie = movies.find(m => m.id == movieId)
    movie.isRented = !movie.isRented
    this.setState({ movies })
  }

  rentMovie = (userId, movieId) => {
    let userData = [...this.state.users]
    userData.forEach(u => {
      if(u.uId === userId) {
        u.budjet -= 3
        u.rentedMovies.push(movieId)
      }
    })
    this.setState({users: userData})
  }

  returnMovie = (userId, movieId) => {
    let userData = [...this.state.users]
    userData.forEach(u => {
        if(u.uId === userId) {
            u.budjet += 3
            let index = u.rentedMovies.findIndex(m => m === movieId)
            u.rentedMovies.splice(index, 1)
        }
    })
    this.setState({users: userData})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div id="main-links">
            {/* links */}
            <Link to="/"><span className='link'>Home</span></Link>
            <Link to="/catalog"><span className='link'>Catalog</span></Link>
          </div>

          {/* routes */}
          <Route path="/" exact render={() => <Landing users={this.state.users} changeCurrUser={this.changeCurrUser}/>}/>
          <Route path="/catalog" exact render={() => <Catalog changeMovieStat={this.changeMovieStat} returnMovie={this.returnMovie} rentMovie={this.rentMovie} users={this.state.users} curUser={this.state.currentUser} movies={this.state.movies}/>}/>
          <Route path="/movie/:id" exact render={({ match }) => <MovieDetail match={match} movies={this.state.movies}/>}/>
        </div>
      </Router>
    );
  }
}

export default App;
