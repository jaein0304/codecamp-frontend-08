import ReactPlayer from "react-player";
import React from "react";

export default function YoutubePage() {
return (
  <div className="player-wrapper">
        <ReactPlayer className="react-player"
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="800px"
            height="600px"
            muted={true}
            playing={true}
    />
  </div>
);
}