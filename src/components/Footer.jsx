import React from 'react'
import Logo from '../assets/Others/Logo.svg'

const Footer = () => {
  return (
    <div className="h-auto">
      <div className='flex flex-col lg:flex-row justify-around items-center gap-6'>
        <div style={{ margin: '20px 20px 0 20px' }} className="lg:w-[50vw] lg:h-[60vh] font-Poppins-thin">
          <img src={Logo} alt="Logo.png" className='h-[115.36px]' style={{ margin: '0 0 30px 0' }} />
          <p className='text-[16px] lg:text-[20px]'>"Ready to bring your creative vision to life? Our team at The Unicorn Pictures is eager to hear from you. Whether you're seeking stunning photography, captivating animation, or have a unique project in mind, we're here to help.</p>
        </div>
        <div className="lg:w-[50vw] flex flex-col gap-12 font-Poppins">
          <div className="grid grid-cols-10">
            <p className='col-span-2 text-[16px] lg:text-[20px] text-right'>Ph no:</p>
            <div className="col-span-1"></div>
            <p className='col-span-7 text-[16px] lg:text-[20px]'>+91 9620425828</p>
          </div>
          <div className="grid grid-cols-10">
            <p className='col-span-2 text-[16px] lg:text-[20px] text-right'>Address:</p>
            <div className="col-span-1"></div>
            <p className='col-span-7 text-[16px] lg:text-[20px]'>2nd floor, 71, 15th Cross Rd, Dollar Layout, 3rd Phase, J. P. Nagar, Bengaluru, Karnataka 560078</p>
          </div>
          <div className="grid grid-cols-10">
            <p className='col-span-2 text-[16px] lg:text-[20px] text-right'>Follow Us:</p>
            <div className="col-span-1"></div>
            <div className="col-span-7 flex">
              <img src="/src/assets/Others/facebook.svg" alt="" className='size-[50%] flex ' />
              <img src="/src/assets/Others/instagram.svg" alt="" className='size-[50%] flex ' />
              <img src="/src/assets/Others/x.svg" alt="" className='size-[50%] flex ' />
              <img src="/src/assets/Others/linkedin.svg" alt="" className='size-[50%] flex ' />
            </div>
          </div>
        </div>
      </div>
      <p style={{ margin: '0 0 35px 0' }} className='w-[inherit] flex justify-center items-center text-[16px] lg:text-[20px]'>&#169; Copyright 2025, All Rights Reserved</p>
    </div>
  )
}

export default Footer
