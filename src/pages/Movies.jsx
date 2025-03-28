import React from 'react';
import clipboard from "../assets/MoviesPosters/clipboard.png"

// Import images
import Bahubali from '../assets/MoviesPosters/Bahubali.png';
import Avengers from '../assets/MoviesPosters/Avengers.png';
import Befikrre from '../assets/MoviesPosters/Befikrre.png';
import zero from '../assets/MoviesPosters/zero.png';
import Vikram from '../assets/MoviesPosters/Vikram.png';
import UI from '../assets/MoviesPosters/UI.png'
import Thor from '../assets/MoviesPosters/Thor.png';
import Sultan from '../assets/MoviesPosters/Sultan.png';
import cocktail from '../assets/MoviesPosters/cocktail.png';
import salar from '../assets/MoviesPosters/salar.png';
import Dhangal from '../assets/MoviesPosters/Dhangal.png';
import EkThaTiger from '../assets/MoviesPosters/EkThaTiger.png';

function Movie() {
  const images = [Bahubali, Avengers, Befikrre, zero, Vikram, UI, Thor, Sultan, cocktail, salar, Dhangal, EkThaTiger];

  return (
    <>
      <div id='Movies' style={{ margin: "100px 0 0 0" }} className="relative gap-20 flex flex-col">
        <div className="flex flex-col justify-center items-center relative">
          <h1 className='text-[23px] md:text-[43px] text-[#BF9C32] font-Poppins font-bold'>Movie Pictures</h1>
          <p className='text-[14px] md:text-[28px] text-[#FFFFFFD8] font-Poppins '>Our Curated Collection of Magical Movies</p>
        </div>
        <div className=" ">

          <div className="flex gap-3 overflow-x-scroll no-scrollbar">
            {images.map((image, index) => (
              <div key={index} className="flex-none md:w-[300px] md:h-[700px] group">
                <img
                  src={image}
                  alt={`Movie ${index + 1}`}
                  className="h-[40vh] w-[auto] md:w-full md:h-full"
                />
              </div>
            ))}
          </div>
        </div>
        <div style={{ margin: '0px 0 96px 0' }} className="grid grid-cols-6 items-center mt-16">
          <div className='col-span-1'></div>
          <img src={clipboard} alt="clipboard" className='col-span-1 flex justify-center items-center h-auto md:h-44' />
          <div className="col-span-1 md:col-span-0"></div>
          <p className='col-span-3 text-[12px] md:text-[23px] font-Poppins'>"We're driving creative excellence in animation and photography, leading with innovation and technology."</p>
        </div>
      </div>
    </>
  );
}

export default Movie;