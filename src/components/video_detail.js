//creates & manages React Components
import React from 'react';

//create a new component that will produce some HTML
const VideoDetail = ({ video }) => {
  if (!video){
    return (
      <div>Loading...</div>
    );
  }
  
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  
  return (
      <div className="video-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={url} ></iframe>
        </div>
        <div className="details">
          <div><h3>{video.snippet.title}</h3></div>
          <div>{video.snippet.description}</div>
        </div>
      </div>
  );
}

export default VideoDetail;