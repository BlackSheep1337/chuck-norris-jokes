import React, { useState, useEffect } from 'react';
import './App.css';
import Jokes from './Jokes';
import ChuckNorris from './chuck-norris-bandeira-dos-eua-2392c.webp';
import { Main } from './styles';
import axios from 'axios';

export default function App() {
  const [word, setWord] = useState('');
  const [jokes, setJokes] = useState([]);
  const [index, setIndex] = useState(0);
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.get(`https://api.icndb.com/jokes/random?firstName=${word}`);
      setJokes([...jokes, data.value]);
      setIndex((prevIdx) => prevIdx + 1);
      setWord('');
    } catch (error) {
      console.log(error);
    }
  }

  const handleRight = () => {
    setIndex((prevIdx) => {
      let index = jokes.length - 1;
      if (prevIdx === index) {
        return 0;
      }
      return prevIdx + 1
    });
  }

  const handleLeft = () => {
    setIndex((prevIdx) => {
      let index = jokes.length - 1;
      if (prevIdx === 0) {
        return index;
      }
      return prevIdx - 1
    });
  }

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const { data } = await axios.get('https://api.icndb.com/jokes/random');
        setJokes([data.value]);
      } catch (error) {
        console.log(error);
      }
    }
    fetchJoke();
  }, []);

  if (!jokes.length) {
    return <div />;
  }

  const { joke } = jokes[index];

  return (
    <Main>
      <div className="header">
        <h1>chuck norris jokes</h1>
        <img
          src={ ChuckNorris }
          alt="chuck norris"
        />
      </div>
      <form onSubmit={ handleSubmit }>
        <div className="input-fild">
          <h3>search for a word</h3>
          <input
            onChange={ (e) => setWord(e.target.value) }
            id="word"
            type="text"
            value={ word }
          />
        </div>
        <button
          type="submit"
          className="btn-primary"
        >
          gerate joke
        </button>
      </form>
      <div className="jokes">
        <Jokes
          joke={ joke  }
          handleRight={ handleRight }
          handleLeft={ handleLeft }
        />
      </div>
    </Main>
  )
}
