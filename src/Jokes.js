import React from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';

export default function Jokes({ joke, handleRight, handleLeft }) {
  return (
    <>
      <div className="button-container">
        <button onClick={ handleLeft }>
          <AiOutlineLeft />
        </button>
        <button onClick={ handleRight }>
          <AiOutlineRight />
        </button>
      </div>
      <div className="joke">
        <p>{ joke }</p>
      </div>
    </>
  )
}
