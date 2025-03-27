import React from 'react'
import Logo from '../assets/Others/Logo.svg'

const Footer = () => {
  return (
    <div className="">
    <div className='flex justify-around items-center'>
      <div style={{padding:'92px'}} className="w-[50vw] h-[60vh] font-Poppins-thin">
        <img src={Logo} alt="Logo.png" className='h-[115.36px]' style={{margin:'0 0 30px 0'}}/>
        <p className='text-[25px]'>"Ready to bring your creative vision to life? Our <br /> team at The Unicorn Pictures is eager to hear <br /> from you. Whether you're seeking stunning <br /> photography, captivating animation, or have a <br /> unique project in mind, we're here to help.</p>
      </div>
      <div className="w-[50vw] flex flex-col gap-12 font-Poppins">
        <div className="grid grid-cols-10">
            <p className='col-span-2 text-[30px] text-right'>Ph no:</p>
            <div className="col-span-1"></div>
            <p className='col-span-7 text-[30px]'>+91 9620425828</p>
        </div>
        <div className="grid grid-cols-10">
            <p className='col-span-2 text-[30px] text-right'>Address:</p>
            <div className="col-span-1"></div>
            <p className='col-span-7 text-[30px]'>2nd floor, 71, 15th Cross Rd, Dollar <br /> Layout, 3rd Phase, J. P. Nagar, <br />Bengaluru, Karnataka 560078</p>
        </div>
        <div className="grid grid-cols-10">
            <p className='col-span-2 text-[30px] text-right'>Follow Us:</p>
            <div className="col-span-1"></div>
            <div className="col-span-7 flex gap-12">
                <img src="/src/assets/Others/facebook.svg" alt="" />
                <img src="/src/assets/Others/instagram.svg" alt="" />
                <img src="/src/assets/Others/x.svg" alt="" />
                <img src="/src/assets/Others/linkedin.svg" alt="" />
            </div>
        </div>
      </div>
    </div>
    <p style={{margin:'0 0 35px 0'}} className='w-[inherit] flex justify-center items-center text-[20px]'>&#169; Copyright 2025, All Rights Reserved</p>
    </div>
  )
}

export default Footer
