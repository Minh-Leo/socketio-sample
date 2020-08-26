import React, { useState } from 'react';
import Time from './Time';

function App() {
  const [loadClient, setLoadClient] = useState(true);

  return (
    <>
      {/* LOAD OR UNLOAD THE CLIENT */}
      <button onClick={() => setLoadClient((prevState) => !prevState)}>
        STOP CLIENT
      </button>
      {/* SOCKET IO CLIENT*/}
      {loadClient ? <Time /> : null}
    </>
  );
}

export default App;
