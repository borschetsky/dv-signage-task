import React, { useRef } from "react";
import "./tweet.css";

const Tweet = props => {
  const imgRef = useRef(null);

  const { tweet, topic } = props;

  const defaultImage = e => {
    e.target.src =
      "https://recap-project.eu/wp-content/uploads/2017/02/default-user.jpg";
  };

  const onErrorDisplayNone = e => {
    imgRef.current.focus();
    imgRef.current.style.display = "none";
  };

  return (
    <div className="post-container">
      <img src={tweet.img} ref={imgRef} onError={onErrorDisplayNone} alt="post"></img>
      <div className="info">
        <div className="bar">
          <span>{topic}</span>
        </div>
        <p>{tweet.text}</p>
        <div className="user-info">
          <div className="user-image">
            <img
              onError={defaultImage}
              src={tweet.userImg}
              alt={tweet.userImg}
            ></img>
          </div>
          <div className="user-name">
            <h5>{tweet.user}</h5>
            {tweet.screenName}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
