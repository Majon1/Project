import './App.css';
import React, { useState, useEffect } from 'react';
import ReactiveButton from 'reactive-button';

const fetchPicture = async () => {
  try {
    const res = await fetch('https://randomfox.ca/floof/');
    const data = await res.json();
    console.log('fetching image');
    console.log(data.image);
    return data;
  }
  catch (err) {
    alert(err);
  }
}

const fetchFact = async () => {
  try {
    const res = await fetch('https://uselessfacts.jsph.pl/api/v2/facts/random');
    const data = await res.json();
    console.log('fetching quote');
    console.log(data.text);
    return data;
  }
  catch (err) {
    alert(err);
  }
}

function App() {
  const [picture, setPicture] = useState('');
  const [fact, setFact] = useState('');

  useEffect(() => {
    handleFox();
  }, [])

  const handleFox = async () => {
    try {
      const fox = await fetchPicture();
      setPicture(fox.image);
      handleQuote();
    }
    catch (err) {
      alert(err);
    }
  }
  const handleQuote = async () => {
    try {
      const qoute = await fetchFact();
      setFact(qoute.text);
    }
    catch (err) {
      alert(err);
    }
  }

  return (
    <div class='App'>
      <img alt="foxes" src={picture}></img>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <ReactiveButton
          onClick={handleFox}
          color="yellow"
          size='medium'
          idleText="Next"
          loadingText="Loading"
          successText="Done" />
      </div>
      <div class='Facts'>{fact}</div>
    </div >
  );
}
export default App;
