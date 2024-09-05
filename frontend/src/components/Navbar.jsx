import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import { USER_NAME } from '../constants';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const username=localStorage.getItem(USER_NAME);



  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">NoteApp</Link>
      </div>
      <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <ul>
        <li>{username}</li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;
