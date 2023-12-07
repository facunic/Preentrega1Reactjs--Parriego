// NavBar.js
import React from 'react';
import CartWidget from './CartWidget';

const NavBar = () => {
  // Puedes reemplazar estos datos de ejemplo con los tuyos
  const brandName = "Mi Tienda";
  const categories = ["Categoría 1", "Categoría 2", "Categoría 3"];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="/">{brandName}</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {categories.map((category, index) => (
              <li key={index} className="nav-item">
                <a className="nav-link" href="/">{category}</a>
              </li>
            ))}
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
}

export default NavBar;