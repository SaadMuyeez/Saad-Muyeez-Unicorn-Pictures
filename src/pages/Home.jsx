import React from 'react'
import Header from '../components/Header'
import Banner from '../assets/Others/Banner.png'
import Card from '../assets/Others/Card.png'
import { FaLongArrowAltRight } from "react-icons/fa";

const Home = () => {
  return (
    <div style={{ backgroundImage: `url(${Banner})`, backgroundRepeat: "no-repeat", backgroundSize: '100%', height: '1380px', }} className='h-screen bg-[#0D1321]'>
      <Header />
      <div style={{}} className="flex justify-around items-center mt-32">
        <div style={{ margin: '0 0 0 0px' }} className="flex flex-col justify-center items-center gap-10 text-left h-[62vh] w-[40vw]">
          <h1 style={{ width: 'inherit' }} className='font-Georgia text-[83px] flex text-left items-center'>Elevate Your Vision</h1>
          <p style={{ width: 'inherit', opacity: '100%' }} className='font-Poppins-thin text-[20px] flex text-left items-center' >Step into a world where imagination knows no bounds. We blend <br /> cutting-edge technology with artistic vision to create truly <br /> magical visual experiences. Let The Unicorn Pictures transform <br />your story into an unforgettable journey.</p>
          <div style={{ width: 'inherit' }} className='flex justify-self-start items-center'>
            <div className="bg-[#D6B962] flex justify-center items-center gap-2 h-[50.25px] w-[184px] rounded-2xl text-[17.21px]">
              <button className='text-black font-Poppins'>Read More</button>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
        <div className="">
          <div className="relative flex justify-center items-center">
            <img src={Card} alt="Card" className="h-[800px] brightness-50 rounded-4xl" />
            <div style={{ margin: '0 0px 0 0px', padding: '54px', width: 'inherit', height: 'inherit' }} className="absolute flex flex-col justify-center bottom-[28px] p-11 gap-3">
              <p className='text-[35px] font-Poppins'>8.2</p>
              <div>Stars</div>
              <p className='text-[35px] font-Poppins'>New releases and exclusive <br /> originals updated weekly</p>
              <p className='text-[20px] font-Poppins-thin'>Snow White premiered at Alcázar of Segovia in <br /> Segovia, Spain on March 12, 2025, and is scheduled <br />to be released in theaters in the United States by <br /> Walt Disney Studios Motion Pictures on March 21, <br /> 2025.</p>
            </div>
          </div>
        </div>
      </div>
      <div id='About' className="">
        <div style={{ margin: '320px 135px 135px 135px' }} className="flex">
          <div className="w-[50vw]">
            <h1 className='text-[32px] font-bold text-[#BF9C32]'>Our Story</h1>
            <h1 className='text-[43px] font-bold'>About The Unicorn Pictures</h1>
          </div>
          <div className="w-[50vw]"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
