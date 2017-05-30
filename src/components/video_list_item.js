//creates & manages React Components
import React from 'react';

//create a new component that will produce some HTML
const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;
  
  return (
    <li className="list-group-item" onClick={() => onVideoSelect(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img className="media=object" src={imageUrl} />
        </div>
      </div>
      
      <div className="media-body">
        <div className="media-heading">{title}</div>
      </div>      
    </li>
  );
}

export default VideoListItem;