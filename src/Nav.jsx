import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/table/1">Table 1</Link></li>
        <li><Link to="/table/2">Table 2</Link></li>
        <li><Link to="/table/3">Table 3</Link></li>
        <li><Link to="/table/4">Table 4</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
