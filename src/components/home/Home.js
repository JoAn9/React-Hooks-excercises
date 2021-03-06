import React, { useState } from 'react';
import Joke from './Joke';
import Stories from './Stories';
import Tasks from './Tasks';
import Gallery from './Gallery';
import Matrix from './Matrix';

function Home() {
  const [userQuery, setUserQuery] = useState('');
  const [showGallery, setShowGallery] = useState(true);

  const toggleGallery = () => {
    setShowGallery(!showGallery);
  };

  const updateUserQuery = event => {
    setUserQuery(event.target.value);
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, '_blank');
  };

  const handleKeyPress = event => {
    if (event.key === 'Enter') {
      searchQuery();
    }
  };
  return (
    <div>
      <h1>Hello Joanna</h1>
      <h2>What do you want to discover today?</h2>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Tasks />
      <hr />
      <Matrix />
      <hr />
      <div>
        {showGallery && <Gallery />}
        <button onClick={toggleGallery}>
          {showGallery ? 'Hide' : 'Show'} gallery
        </button>
      </div>
      <hr />
      <Stories />
    </div>
  );
}

export default Home;
