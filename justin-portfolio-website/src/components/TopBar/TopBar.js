import React from 'react';
import { Link } from 'react-router-dom';
import './TopBar.css';

function TopBar() {
    return (
        <header className="top-bar">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/resume">Resume</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default TopBar;
