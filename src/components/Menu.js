import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className="Menu">
      <Link to="/home">Home</Link> <Link to="/wall">Wall</Link>
    </div>
  );
}

export default Menu;
