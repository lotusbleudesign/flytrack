import React from 'react';
import { Card } from 'react-bootstrap';
import text from './../assets/text'
import { FaTelegramPlane } from "react-icons/fa";

function HomePage() {

  return (
    <div className='card'>
      <div className='text'>
        <FaTelegramPlane /> <h1>{text.titre}</h1>

      </div>
    </div >
  )
}
export default HomePage;