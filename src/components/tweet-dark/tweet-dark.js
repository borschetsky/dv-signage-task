import React, { useRef } from "react";

import "./tweet-dark.css";

const TweetDark = props => {
  const { tweet } = props;
  const imgRef = useRef(null);
  const defaultImage = e => {
    e.target.src =
      "https://recap-project.eu/wp-content/uploads/2017/02/default-user.jpg";
  };

  const onErrorDisplayNone = e => {
    imgRef.current.focus();
    imgRef.current.style.display = "none";
  };

  return (
    <div className="dark-container">
      <div className="left-side">
        <img src={tweet.userImg} onError={defaultImage} alt="user"></img>
      </div>
      <div className="info-dark">
        <div className="user-name-dark">
          <strong>
            <span>{tweet.user}</span>
          </strong>

          {tweet.screenName}
        </div>
        <div className="text">{tweet.text}</div>
        <img src={tweet.img} ref={imgRef} onError={onErrorDisplayNone} alt="post"></img>
      </div>
      <div className="right-bar"></div>
    </div>
  );
};

export default TweetDark;
