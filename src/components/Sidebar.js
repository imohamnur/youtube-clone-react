import React from 'react'
import "./styles/sidebar.css"
import home from "./sidebar-pic/home.svg"
import explore from "./sidebar-pic/explore.svg"
import subcriptions from "./sidebar-pic/subscriptions.svg"
import originals from "./sidebar-pic/originals.svg"
import music from "./sidebar-pic/youtube-music.svg"
import library from "./sidebar-pic/library.svg"

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar-link">
        <img src={home} />
        <div>Home</div>
      </div>
      <div className="sidebar-link">
        <img src={explore} />
        <div>Explore</div>
      </div>
      <div className="sidebar-link">
        <img src={subcriptions} />
        <div>Subscriptions</div>
      </div>
      <div className="sidebar-link">
        <img src={originals} />
        <div>Originals</div>
      </div>
      <div className="sidebar-link">
        <img src={music} />
        <div>Youtube Music</div>
      </div>
      <div className="sidebar-link">
        <img src={library} />
        <div>Library</div>
      </div>
    </section>
  )
}

export default Sidebar