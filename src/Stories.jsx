import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Stories() {
  const [stories, setStories] = useState([]);

  const url = 'https://news-proxy-server.appspot.com/topstories';

  useEffect(() => {
    async function fetchStories() {
      try {
        const res = await axios.get(url);
        setStories(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchStories();
  }, []);

  return (
    <div className="Stories">
      <h3>Stories</h3>
      {stories.map(item => {
        const { id, by, time, title, url } = item;

        return (
          <div key={id}>
            <a href={url}>{title}</a>
            <div>
              {by} - {new Date(time * 1000).toLocaleString()}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Stories;
