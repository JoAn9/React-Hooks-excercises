import React from 'react';
import { setUsername } from '../../state/actions';
import { useWallContext } from '../../hooks';

function Username() {
  const {
    state: { username },
    dispatch,
  } = useWallContext();

  const handleUsername = event => {
    dispatch(setUsername(event.target.value));
  };

  return (
    <div>
      <h3>Username</h3>
      <input value={username} onChange={handleUsername} />
    </div>
  );
}

export default Username;
