import { useState } from "react";
import playingImage from "./m-playing.gif";

function GalleryItem(props) {
  let [view, setView] = useState(false);

  // code to convert ms to time
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    //ES6 interpolated literals/template literals
    //If seconds is less than 10 put a zero in front.
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  //   play audio
  let audio = new Audio(props.item.previewUrl);



  const detailView = () => {
    return (
      <div className="detailV">
        <img src={playingImage} />
        <h4>{props.item.trackName}</h4>
        <small>{props.item.collectionName}</small>
        <h6>Length: <span>{millisToMinutesAndSeconds(props.item.trackTimeMillis)}</span></h6>
        <button onClick={() => setView(!view) && audio.pause()}> Go Back <span>➜</span></button>
      </div>
    );
  };

  const defaultView = () => {
    return (
      <div>
        <div className="imgContainer">
          <img
            src={props.item.artworkUrl100}
            alt="Avatar"
            className="trackImage"
          />
          <p> {props.item.trackName}</p>
          <button onClick={() => audio.play() && setView(!view)}>
          <span>▷ </span>Play Preview
          </button>
        </div>
      </div>
    );
  };

  return (<div className="display">
    {view ? detailView() : defaultView()}

    </div>);
}

export default GalleryItem;

// artworkUrl100
// artworkUrl30
// trackTimeMillis convert to minute
// previewUrl
// trackViewUrl
// trackName
// collectionName
