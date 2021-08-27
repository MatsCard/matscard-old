import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'

function Navbar () {    
    return (
        <div className="container-xl">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" aria-current="page"  to="/">Matias Cardone's website</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" href="#profile">About Me</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#contact-me">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )}
;


export default Navbar;