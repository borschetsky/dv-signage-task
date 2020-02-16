import tweets from "../mocks/tweets.json";

const parseTweets = () => {
  const result = [];
  tweets.tweets.forEach(element => {
    if (element.tweets) {
      element.tweets.forEach(t => {
        const tweetObject = {
          user: t.user,
          userImg: t.userImg,
          screenName: t.screenName,
          text: t.text,
          img: t.img,
          topic: element.topic
        };
        result.push(tweetObject);
      });
    }
  });
  return result;
};

export { parseTweets };
