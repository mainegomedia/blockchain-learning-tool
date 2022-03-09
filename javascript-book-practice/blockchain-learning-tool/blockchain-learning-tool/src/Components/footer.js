import React from 'react';
import logo from '../mainegomedia-vector.png';

const Footer = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-light">
            <div class="container">
                <a class="navbar-brand" href="http://www.mainegomedia.com">
                <img src= { logo } alt="logo" width="50" height="50"></img>
                </a>
                Mainegomedia LLC
            </div>
            </nav>
        </div>
    )
}

export default Footer;
