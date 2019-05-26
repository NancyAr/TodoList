//function based component
import React from 'react';
import {Link} from 'react-router-dom';
//As if we have only render, 1 return that works like a render
function Header() {
    //In react we can't add links using the simple "a" we have to import link
    return (
        <header style={headerStyle}>
            <h1> TodoList </h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </header>
    )
}

//We add styles in the same component just to encapsulate each component with its properties
//as a celebration and demonestration of React Components feature
//We could oc course add all the style to a single css file and add coomponents to certain classes
const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}

export default Header;