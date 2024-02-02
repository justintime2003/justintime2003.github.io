import React from 'react';
import './TopBar.css'; // Import the CSS file for styling

function TopBar() {
    return (
        <header className="top-bar">
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default TopBar;
