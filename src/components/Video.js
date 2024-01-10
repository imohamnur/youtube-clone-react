import React from 'react'
import pfp from "./header-pic/youtube-logo.svg"
import { decode } from 'html-entities'


const Video = ({ thumbnail, title, creator }) => {
  return (
    <div className="video-preview">
        <div className="thumbnail-div">
          <img className="thumbnail" src={thumbnail} />
          <div className="video-time">10:00</div>
        </div>
        <div className="video-info-grid">
          <div className="pfp-div">
            <img className="pfp" src={pfp} />
          </div>
          <div className="text-div">
            <p className="video-title">{decode(title)}</p>
            <p className="video-author">{decode(creator)}</p>
            <p className="video-stats">1M views &#183; 1 year ago</p>
          </div>
        </div>
      </div>
  )
}

export default Video