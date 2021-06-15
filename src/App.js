import React, { useEffect, useRef } from 'react';

// Components
import HashTags from './components/Hashtags';
import Tweet from './components/Tweet';

// Styles
import './styles/App.scss';

const App = () => {
  const inputRef = useRef(null);

  const [keyword, setKeyword] = React.useState('');

  const [tweets, setTweets] = React.useState(null);

  const handleInput = (evt) => {
    const getTweets = () => {
      fetch('/search/tweets/' + keyword.replace(/#/g, '%23'))
      .then(result => result.json())
      .then(body => {
        let hashtags = body.statuses
                      .filter(tweetObj => tweetObj.entities.hashtags.length > 0)
                      .map(tweetObj =>  tweetObj.entities.hashtags);

        hashtags = [].concat.apply([], hashtags);

        setTweets([body.statuses, hashtags])
      });
    };

    if(evt.key === 'Enter') {
      getTweets()
    } else {
      setKeyword(evt.target.value);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className='app'>
      <div className='tweetsSect'>
        
        {tweets && (
          tweets[0].length === 0
          ? <p>No results</p>
          : <>
          <h2>Home</h2>
            {tweets[0].map((tweet) => (
              <Tweet
                key={tweet.id}
                image={tweet.user.profile_image_url_https}
                text={tweet.text}
                user={tweet.user.screen_name}
              />
            ))}
        </>
      )}
      </div>
      <div className="sidePanel">
      <div className='searchSect'>
        
        <input
          ref={inputRef}
          placeholder='Search by keyword'
          onKeyUp={evt => handleInput(evt)}
        />
      </div>
      
        
        {tweets && tweets[1].length > 0 &&
        <div className='hashtagsSect'>
          <div className='hashtagsHeader'>
          <h4>Filter by hashtag</h4></div>
          <HashTags hashtags={tweets[1]} />
          </div>
        }
     
      </div>
    </div>
  );
}

export default App;
