import React from 'react'
import { Link } from 'react-router-dom'
import CartWiddet from '../CartWiddet'

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to={"/"}>Mi Tienda</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/category/electronics" className="nav-link active" aria-current="page" >Electronica</Link>
            </li>
            <li className="nav-item">
              <Link to={"/category/jewelery"} className="nav-link" >Joyeria</Link>
            </li>
            <li className="nav-item">
              <Link to={"/category/men's clothing"} className="nav-link" >Ropa para Hombre</Link>
            </li>
            <li className="nav-item">
              <Link to={"/category/women's clothing"} className="nav-link" >Ropa para Dama</Link>
            </li>

          
            <li>
            </li>
          </ul>
          
          <div>
              <CartWiddet/>
            
          </div>
            
            </div>
      </div>
    </nav>
  )
}

export default NavBar