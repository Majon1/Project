import './App.css';
import React, { useState } from 'react';
import ReactiveButton from 'reactive-button';


function App() {
  const [picture, setPicture] = useState(null);

  const fetchPicture = async () => {
    try {
      const res = await fetch('https://randomfox.ca/floof/');
      const data = await res.json();
      setPicture(data.image);
      return data;
    }
    catch (err) {
      alert(err);
    }
  }
  const handleFox = async () => {
    const fox = await fetchPicture();
    setPicture(fox.image);
  }

  return (
    <div>
      <img alt="foxes" src={picture}></img>
      <p>
        <ReactiveButton onClick={handleFox}
          color="green"
          size='large'
          rounded
          idleText="Next"
          loadingText="Loading"
          successText="Done" />
      </p>
    </div>
  );
}

export default App;
