import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Navbar.css'

function Navbar () {    
    return (
        <div className="container-xl">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" aria-current="page"  to="/matscard">Matias Cardone's website</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" aria-current="page"  to="/matscard">Home</Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#profile">About Me</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#contact-me">Contact Me</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
    )}
;


export default Navbar;