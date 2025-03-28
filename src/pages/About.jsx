import React from 'react'
import Unicorn from '../assets/Others/Unicorn.png'
import yellowMoon from '../assets/Others/yellowMoon.svg'
import photoAnimal from '../assets/Others/photoAnimal.png'
import photographer from '../assets//Others/photographer.png'
import { MdNorthEast } from "react-icons/md";

const About = () => {
    return (
        <div id="About">
            <div className="">
                <div className="h-[92%] relative flex justify-center items-center">
                    <img src={Unicorn} alt="" />
                    <div className="absolute h-[inherit] lg:left-[27%] md:left-[26%] left-[25%]">
                        <img src={yellowMoon} alt="" className='h-[inherit]' />
                        <p className='absolute w-[60%] text-[4px] top-[30%] left-[3%] lg:text-[13px] lg:top-[33%] lg:left-[5%] md:text-[9px] md:top-[32%] md:left-[3%] font-Poppins-thin'>
                            <div style={{ margin: '' }} className="relative">
                                <MdNorthEast />
                            </div>
                            The Unicorn Pictures crafts magical visual experiences through innovative storytelling.
                        </p>
                    </div>
                    <div className="absolute h-[inherit] lg:left-[41%] md:left-[40%] left-[39%]">
                        <img src={photoAnimal} alt="" className='h-[inherit]' />
                        <h1 className='absolute text-[22px] top-[27%] lg:text-[72px] lg:top-[29%] lg:left-[6%] md:text-[39px] md:top-[34%] md:left-[4%] z-50'>Unicorn</h1>
                    </div>
                    <div className="absolute h-[inherit] lg:left-[54%] md:left-[53%] left-[52%]">
                        <img src={photographer} alt="" className='h-[inherit]' />
                        <div className="flex justify-center items-center gap-4">
                            <button className='absolute w-10 h-4 top-[38%] right-[13%] text-[6px] lg:w-28 lg:h-8 bg-white rounded-2xl text-black lg:top-[42%] lg:right-[24%] md:top-[40%] md:right-[20%] md:w-28 md:h-8'>Learn More</button>
                            <div className="absolute text-white top-[40%] right-[-2%] lg:top-[44%] lg:right-[16%] md:top-[43%] md:right-[10%]">
                                <MdNorthEast />
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
                    <p className='text-[10px] md:text-[17px] font-Poppins-thin text-center'>
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
