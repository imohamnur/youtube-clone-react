import React from 'react'
import Video from './Video'
import "./styles/video.css"

const Videos = ({ apiData }) => {
    
  return (
    <div className='video-grid'>
        {apiData ? apiData.map((data) => {
          return <Video title={data.snippet.title} thumbnail={data.snippet.thumbnails.default.url} creator={data.snippet.channelTitle} />
        }) : <h1 className='text'>Search for a video above</h1>}
    </div>
  )
}

export default Videos