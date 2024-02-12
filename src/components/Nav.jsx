import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.css';

const Nav = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">E-Shop</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0"> 
         <li >
        <NavLink exact to="/" className="nav-item">
           Home
        </NavLink>
        </li>
        <li >
        <NavLink exact to="/offers" className="nav-item">
           Offers
        </NavLink>
        </li>
        <li>
        <NavLink exact to="/collections" className="nav-item">
           Collections
        </NavLink>
        </li>
        <li>
        <NavLink exact to="/cart" className="nav-item">
           Cart
        </NavLink>
        </li>
       </ul> 
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
  </div>
</nav>
    </div>
  )
}

export default Nav