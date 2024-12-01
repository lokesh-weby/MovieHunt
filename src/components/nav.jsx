import React from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'

const Nav = () => {
  return (

<nav className="navbar container fixed-top navbar-expand-lg px-5 ">
  <NavLink className="navbar-brand" to="/">MovieHunt</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav mx-5">
      <NavLink className="nav-item nav-link" to="/">Home</NavLink>
      <NavLink className="nav-item nav-link" to="/movies/popular">Popular</NavLink>
      <NavLink className="nav-item nav-link" to="/movies/top">TopMovies</NavLink>
      <NavLink className="nav-item nav-link" to="/movies/upcoming">Upcoming Movies</NavLink>
    </div>
    </div>
</nav>
  )
}

export default Nav
