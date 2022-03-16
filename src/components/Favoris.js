import React, { useState } from 'react';
import FavCard from './FavCard'

function Favoris() {

  const [data, setData] = useState(Object.entries(localStorage));

  const deleteFav = (id) => {
    console.log(id)
    localStorage.removeItem(id)
    setData(Object.entries(localStorage));
  }

  return (
    <div className='card'>
      {
        data.map((el) => (
          // console.log(el[0])
          <FavCard
            key={el[0]}
            index={el[0]}
            deleteFuncFav={deleteFav}
          />

        ))
      }
    </div >
  )
}

export default Favoris;