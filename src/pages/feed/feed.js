import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import TweetDark from '../../components/tweet-dark';
import Tweet from '../../components/tweet';
import { parseTweets} from '../../helpers/jsonHelper';

const Feed = (props) => {
    const {type} = props;

    const preparedTweetsTriple = [...parseTweets(), ...parseTweets(),...parseTweets(), ...parseTweets()].sort(() => Math.random() - 0.5);

    const preparedTweets = preparedTweetsTriple.map((el, i) => {
      const currentTweet = 
        (type === 'dark' ? 
          (<TweetDark tweet={el} topic={el.topic} />) : (<Tweet tweet={el} topic={el.topic} />));
      return (
        <ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' key={i} delay={11 * i}>
          {currentTweet}
        </ScrollAnimation>
      );
    });

    return (
        <div>
            {preparedTweets}
        </div>
    );
}

export default Feed;