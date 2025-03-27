import React from 'react'
import Unicorn from '../assets/Others/Unicorn.png'
import yellowMoon from '../assets/Others/yellowMoon.svg'
import photoAnimal from '../assets/Others/photoAnimal.png'
import photographer from '../assets//Others/photographer.png'
import { MdNorthEast } from "react-icons/md";

const About = () => {
    return (
        <div id='About' className="">
            <div className=""></div>
            <div className="relative">
                <img src={Unicorn} alt="" />
                <div style={{ top: 40, left: 500 }} className="flex absolute">
                    <div className="relative">
                        <img src={yellowMoon} alt="" />
                        <p style={{ top: '35%', left: 50 }} className='absolute text-[17px] font-Poppins-thin'>
                            <div style={{ margin:'' }} className="relative">
                                <MdNorthEast />
                            </div>
                            The Unicorn Pictures <br /> crafts magical visual <br /> experiences through <br /> innovative storytelling.
                        </p>
                        <div style={{ top: '0', right: '-240px' }} className="absolute">
                            <img src={photoAnimal} alt="" />
                            <div style={{ top: '5px', right: '-336px' }} className="absolute">
                                <img src={photographer} alt="" />
                            </div>
                            <div style={{ top: 150, left: 30 }} className="absolute flex justify-center items-center gap-12">
                                <h1 className='text-[96px]'>Unicorn</h1>
                                <div className="flex justify-center items-center gap-4">
                                    <button style={{ margin: '25px 0 0 0' }} className='text-[13px] w-28 h-8 bg-white rounded-2xl text-black'>Learn More</button>
                                    <div style={{ margin: '25px 0 0 0' }} className="">
                                        <MdNorthEast />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-36">
                <div
                    style={{ margin: "0 100px" }}
                    className="max-h-[72px] overflow-hidden text-ellipsis whitespace-pre-wrap scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300 hover:overflow-auto"
                >
                    <p className='text-[17px] font-Poppins-thin text-center'>
                        The Unicorn Pictures Private Limited, incorporated in the year 2017
                        as a Private Limited Company registered with Registrar of Companies.
                        The registered office of the Company is situated in <br /> No. 96, 2nd Floor,
                        R.J. Garden, Marathahalli, Chinnapanahalli, Bangalore 560 037. The Company
                        is working towards excellence in the Creative and Animation Space. We believe
                        in pursuing <br /> business through innovation and technology. Our goal is to be an
                        industry leader by providing enhanced products, services, relationship and
                        profitability. <br /><br />Vision: To provide quality products and services that exceeds
                        the expectations of our valued customers. <br /><br /> Mission: To build long-term relationships
                        with our customers. In the future, we look forward to developing a strong base of
                        key customers and increasing the assets and investments of our Company. <br /> Our team
                        comprises of a group of highly motivated industry experts and specialists with
                        several years of experience. <br /><br />At The Unicorn Pictures Private Limited, our customers
                        always come first and we greatly appreciate the trust that they place in us. From
                        initial enquiry to final copy, the Unicorn Pictures <br /> Private Limited team will help
                        you achieve your goals on time.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About

//     < div className = 'relative' >
//             <img src={Unicorn} alt="Unicorn" />
//             <div className="flex justify-center items-center w-[100%] absolute top-0">
//                 <img src={yellowMoon} alt="Yellow Moon" className='left-0' />
//                 <img src={photoAnimal} alt="Photo Animal" className='mx-auto' />
//                 <img src={photographer} alt="Photographer" className='right-0' />
//             </div>
// {/* <div className="flex absolute top-0">
//                 <img src={yellowMoon} alt="Yellow Moon" className='left-0' />
//                 <img src={photoAnimal} alt="Photo Animal" className='mx-auto' />
//                 <img src={photographer} alt="Photographer" className='right-0' />
//             </div> */}
//         </ >
