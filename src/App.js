import React from 'react';
import './App.css';
import Jokes from './Jokes';
import ChuckNorris from './chuck-norris-bandeira-dos-eua-2392c.webp';
import { Main } from './styles';

export default function App() {
















  return (
    <Main>
      <div className="header">
        <h1>chuck norris jokes</h1>
        <img src={ ChuckNorris } alt="chuck norris" />
      </div>
      <form>
        <div className="input-fild">
          <h3>search for a word</h3>
          <input id="word" type="text" />
        </div>
        <button className="btn-primary">
          gerate joke
        </button>
      </form>
      <div className="jokes">
        <Jokes />
      </div>
    </Main>
  )
}
