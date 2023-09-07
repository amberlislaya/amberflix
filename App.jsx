import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import Amberlis from './pages/amberlis/Amberlis'
import Footer from './components/foooter/Footer'
import UserListedMovies from './pages/userListedMovies/UserListedMovies'
import Player from './pages/player/Player'
import MoviePage from './pages/movies/MoviePage'
import TVShows from './pages/TVShows/TVShows'

const App = () => {


  return (

<BrowserRouter>
 <Routes>
   <Route exact path="/" element={<Amberlis/>}/>
  <Route exact path="/login" element={<Login/>}/>
  <Route exact path="/signup" element={<Signup/>}/>
  <Route exact path="/player" element={<Player />} />
  <Route exact path="/tv" element={<TVShows />} />
  <Route exact path="/movies" element={<MoviePage />} />
  <Route exact path="/new" element={<Player />} />
  <Route exact path="/mylist" element={<UserListedMovies />} />
 </Routes>
 <Footer/>
</BrowserRouter>

)
}

export default App
