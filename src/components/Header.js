import React from 'react'
import "./styles/header.css"
import hamburger from "./header-pic/hamburger-menu.svg"
import logo from "./header-pic/youtube-logo.svg"
import searchpic from "./header-pic/search.svg"
import voice from "./header-pic/voice-search-icon.svg"
import pfp from "./header-pic/my-pfp.jpg"

const Header = ({ search, setSearch, handleSearch }) => {
  return (
    <header className="header">
      <div className="left-section">
        <img className="hamburger-menu" src={hamburger} />
        <img className="youtube-logo" src={logo} />
      </div>
      <form onSubmit={handleSearch}>
        <div className="middle-section">
            <input className="search-bar" type="text" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
            <button className="search-button">
              <img className="search-icon" src={searchpic} />
              <div className="tooltip">Search</div>
            </button>
        </div>
      </form>
    </header>
  )
}

export default Header