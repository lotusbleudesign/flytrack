import React, { useState, useEffect } from 'react';
import { FaTrashAlt } from "react-icons/fa";

export default function ListCard({ index, deleteFuncFav }) {

  const [photo, setPhoto] = useState("");

  useEffect(() => {

    const API_URL = `${process.env.REACT_APP_API_URL}${process.env.REACT_APP_FLYTRACER_API_KEY}`

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
        setPhoto(currentData.photos[index].img_src)
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [index])

  return (
    <div className='favori'>
      <div>
        {
          photo ? (
            <img src={photo}
              alt="img"
              width="450px"
            />
          ) : "Chargement..."
        }
      </div>
      <button onClick={() => { deleteFuncFav(index) }} className="btn btn-hover spacing"><FaTrashAlt /></button>
      <br />
    </div>

  )
}


