import React from 'react';
import './App.css';
import Jokes from './Jokes';
import ChuckNorris from './chuck-norris-bandeira-dos-eua-2392c.webp';
import { Main, Form } from './styles';

export default function App() {
















  return (
    <Main>
      <Form>
      <div className="header">
        <h1>chuck norris jokes</h1>
        <img src={ ChuckNorris } alt="Chuck Norris" />
      </div>
        <div className="control">
          <input type="text" />
          <button>
            gerate a joke
          </button>
        </div>
      </Form>
      <div className="jokes">
        <Jokes />
      </div>
    </Main>
  )
}
