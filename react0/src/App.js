import React, { useState } from 'react'
import { Counter } from './components/useState/Counter';
import { Info2 } from './components/useEffect/Info2';

function App() {
  const [visible, setvisible] = useState(false);
  return (
    <>
      <button onClick={()=>{
        setvisible(!visible);
      }}
      >
        {visible ? 'hide' : 'appear'}
      </button>
      <hr />
      {visible && <Info2 />}
    </>
  );
}

export default App;
