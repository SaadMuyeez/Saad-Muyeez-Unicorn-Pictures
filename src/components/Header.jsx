import React, { useState } from 'react'
import Logo from '../assets/Others/Logo.svg'
import MenuOpenSharpIcon from '@mui/icons-material/MenuOpenSharp';

import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="main">
      <div className="flex justify-around md:justify-around lg:grid grid-cols-3 md:grid-cols-10 h-[18vh] items-center font-Poppins">
        <div className="col-span-2 md:col-span-3 flex justify-center md:items-center mt-12">
          <img src={Logo} alt="Logo.svg" className="h-[90px] w-[180px] max-h-full lg:h-[115.36px] lg:w-[218.44px]" />
        </div>
        <div className="hidden col-span-6 col-start-5 text-center list-none justify-self-start items-center gap-16 lg:gap-24 mt-12 lg:text-[18px] md:flex">
          <li><a href="#Home" className="">Home</a></li>
          <li><a href="#About" className="">About Us</a></li>
          <li><a href="#Movies" className="">Movies</a></li>
          <li><a href="#Contact" className="">Contact Us</a></li>
        </div>
        <IconButton className='col-span-1 p-0' edge="end" color="inherit" aria-label="menu" onClick={toggleSidebar} sx={{
          display: { xs: 'block', sm: 'none', md: 'none', lg: 'none', xl: 'none' }, padding: '0px',
        }}>
          <MenuOpenSharpIcon />
        </IconButton>
      </div>
      <Drawer anchor="right" open={isSidebarOpen} onClose={toggleSidebar}>
        <List>
          <ListItem >
            <ListItemText><a href="#Home">Home</a></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText><a href="#About">About</a></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText><a href="#Movies">Movies</a></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText><a href="#Contact">Contact Us</a></ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  )
}

export default Header


// import React, { useState } from 'react'
// import Logo from '../assets/Others/Logo.svg'
// import { TiThMenu } from "react-icons/ti";

// const Header = () => {
//   const [toggleSidebar, setToggleSidebar] = useState(false);

//   const Sidebar = () => {
//     setToggleSidebar(!toggleSidebar)
//   }
//   return (
//     <div className="main">
//       <div className="flex justify-around lg:grid grid-cols-10 h-[18vh] items-center font-Poppins">
//         <div className="col-span-3 flex justify-center items-center mt-12">
//           <img src={Logo} alt="Logo.svg" className="h-[90px] w-[180px] max-h-full lg:h-[115.36px] lg:w-[218.44px]" />
//         </div>
//         <div className="hidden col-span-6 col-start-5 text-center list-none justify-self-start items-center gap-16 lg:gap-24 mt-12 lg:text-[18px] md:flex">
//           <li><a href="" className="">Home</a></li>
//           <li><a href="#About" className="">About Us</a></li>
//           <li><a href="#Movies" className="">Movies</a></li>
//           <li><a href="#Contact" className="">Contact Us</a></li>
//         </div>
      

//       </div>
//     </div>
//   )
// }

// export default Header
