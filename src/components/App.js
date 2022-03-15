import React, { useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import AboutPage from "./About";
import HomePage from "./Home";

import './../styles/App.css';


export default function App() {

  useEffect(() => {
    //apiCall()
    console.log("->Onload")
  }, [])

  return (
    <>
      <div className='app'>
        <Routes>
          <Route exact path="about" element={<AboutPage className="about" />} />
          <Route path="*" element={<HomePage className="home" />} />
        </Routes>
      </div>
    </>
  );
}


/******** Functions  *********/

// const apiCall = async () => {

//   const API_KEY = process.env.REACT_APP_FLYTRACER_API_KEY;
//   const API_URL = `http://api.aviationstack.com/v1/flights?access_key=${API_KEY}&limit=50`
//   await fetch(API_URL)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data)
//     })
//     .catch(err => JSON.stingify(err))
// }
