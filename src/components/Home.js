import React, { useEffect, useState } from 'react';
import data from './../assets/data'
import text from './../assets/text'
import { BsFillHeartFill } from "react-icons/bs";
import { HiArrowNarrowRight } from "react-icons/hi";
import { storage } from '../services/utilities';

function HomePage() {

  const [photos, setPhotos] = useState(null);

  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [cameraName, setCameraName] = useState()


  useEffect(() => {

    const API_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_FLYTRACER_API_KEY}`
    console.log("API_URL", API_URL)
    fetch(`${API_URL}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Error : ${response.status}`
          );
        }
        return response.json();
      })
      .then((currentData) => {
        data = currentData
      })
      .catch((err) => {
        console.log(err.message);
      });

    setPhotos(data)

    // make random
    let size = data.photos.length
    let value = Math.floor(Math.random() * size)

    setPhoto(data.photos[value].img_src)
    setId(value)
    setName(data.photos[value].rover.name)
    setDate(data.photos[value].date)
    setCameraName(data.photos[value].camera.full_name)
    setStatus(data.photos[value].rover.status)

  }, [])


  function refreshPhoto() {
    let size = photos.photos.length
    let value = Math.floor(Math.random() * size)

    setPhoto(data.photos[value].img_src)
    setId(value)
    setName(data.photos[value].rover.name)
    setDate(data.photos[value].date)
    setCameraName(data.photos[value].camera.full_name)
    setStatus(data.photos[value].rover.status)

  }

  return (

    <div className='card shadow-md'>

      <div className='next'>
        <button onClick={() => refreshPhoto()} className="btn btn-hover spacing">
          <HiArrowNarrowRight />
        </button>
      </div>

      <div className='photo spacing'>
        {
          photo ? (
            <img src={photo}
              alt={name}
              width="450px"
              className='border-radius'
            />
          ) : "Chargement..."
        }
      </div>

      <div className='photoDetails '>
        <div className='titre description'>
          <b>{text.camera}</b>: {photo ? (cameraName) : ""}
        </div>

        <div className='content description'>
          <span><b>{text.robot}</b> : {photo ? (name) : ""}</span>
          <br /><b>{text.statut}</b> : {photo ? (status) : ""}
        </div>
        <div className='vote description'>{text.date}{photo ? date : ""}
        </div>

        <div>
          <button onClick={() => storage(id)} className="btn btn-hover spacing"><BsFillHeartFill />
          </button>

        </div>
      </div>
    </div >
  )
}

export default HomePage;
