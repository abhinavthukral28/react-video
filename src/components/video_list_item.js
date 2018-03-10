import React from 'react';

const VideoListItem = ({video}) => {
  const imgUrl = video.snippet.thumbnails.default.url;

  return (
  <li className="list-group-item">
    <div className="video-list media">
      <div className="media-object">
        <img className="media-object" src={imgUrl}></img>
      </div>
      <div className="media-body">
      <div className="media-heading">{video.snippet.title}
      </div>
    </div>

    </div>
  </li>)
};

export default VideoListItem;
