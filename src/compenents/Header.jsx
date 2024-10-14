import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const Header = ({text,bgColor,txtColor}) => {

  return (
    <header style={{backgroundColor:bgColor, color:txtColor}}>
        <div className="container">
          <div className="header-wrapper">
            <Link to={"/"}>
                <h1>
                   { text }
                </h1>
            </Link>
          </div>
       </div>
    </header>
  )
}

export default Header