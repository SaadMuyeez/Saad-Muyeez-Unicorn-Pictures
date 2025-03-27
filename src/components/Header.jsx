import React, { useState } from 'react'
import Logo from '../assets/Others/Logo.svg'
import { TiThMenu } from "react-icons/ti";

const Header = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);

  const Sidebar = () => {
    setToggleSidebar(!toggleSidebar)
  }
  return (
    <div className="main">
      <div className="flex justify-around lg:grid grid-cols-10 h-[18vh] items-center font-Poppins">
        <div className="col-span-3 flex justify-center items-center mt-12">
          <img src={Logo} alt="Logo.svg" className="h-[90px] w-[180px] max-h-full lg:h-[115.36px] lg:w-[218.44px]" />
        </div>
        <div className="hidden col-span-6 col-start-5 text-center list-none justify-self-start items-center gap-16 lg:gap-24 mt-12 lg:text-[18px] md:flex">
          <li><a href="" className="">Home</a></li>
          <li><a href="#About" className="">About Us</a></li>
          <li><a href="#Movies" className="">Movies</a></li>
          <li><a href="#Contact" className="">Contact Us</a></li>
        </div>
      

      </div>
    </div>
  )
}

export default Header
