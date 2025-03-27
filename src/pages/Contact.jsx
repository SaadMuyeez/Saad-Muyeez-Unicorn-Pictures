import React from 'react'
import businessWomen from '../assets/Others/businessWomen.png'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className="">
      <div id='Contact' className='flex bg-[#100808]'>
        <div className="w-[50vw]">
          <img src={businessWomen} alt="" className='h-[1109px]' />
        </div>
        <div className="flex flex-col justify-center items-center w-[50vw]">
          <form className="w-[761px]">
            <h1 className='text-[80px] font-bold font-Poppins'>Contact Us</h1>
            <p style={{ margin: '0 0 32px 0' }} className='text-[23px] text-[#D6B962] pb-4 font-Rubik'>Reach out and let’s start a conversation</p>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <label htmlFor="name" className='text-[18px] text-[#D6B962] mb-6 font-Rubik'>Name</label>
                <input className='bg-white text-black h-[56px] w-[761px] rounded-[5px]' name="name" type="text" />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="phone" className='text-[18px] text-[#D6B962] mb-6 font-Rubik'>Phone Number</label>
                <input type="number" className='bg-white text-black  h-[56px] w-[761px] rounded-[5px]' name='email' />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="email" className='text-[18px] text-[#D6B962] mb-6 font-Rubik'>Email Address</label>
                <input type="text" className='bg-white text-black h-[56px] w-[761px] rounded-[5px]' name='email' />
              </div>
              <div className="flex flex-col gap-4">
                <label htmlFor="msg" className='text-[18px] text-[#D6B962] mb-6 font-Rubik'>Message</label>
                <textarea name="msg" className='bg-white text-black rounded-[5px]' rows={5} id=""></textarea>
              </div>
            </div>
            <button style={{ margin: '62px 0 0 0' }} className='w-[inherit] bg-[#D6B962] h-[70px] rounded-[35px] text-[25px] font-Rubik'>Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
