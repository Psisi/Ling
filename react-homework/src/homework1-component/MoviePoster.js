import React from "react";

const MoviePoster = (props) => {
  return (
    <div className="movie">
      <img src={props.imgurl} alt={props.alt}></img>
      <div className="text">
        <p>{props.title}</p>
        <div className="info">
        <span className="date">{props.date}</span>
        <span className="rating">{props.rating}</span>
        </div>
      </div>
    </div>
  );
};



export default MoviePoster;