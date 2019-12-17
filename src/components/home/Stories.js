import React from 'react';
import { useFetch } from '../../hooks';

function Stories() {
  const url = 'https://news-proxy-server.appspot.com/topstories';

  const stories = useFetch(url, []);

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
