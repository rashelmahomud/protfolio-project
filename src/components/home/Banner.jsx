import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faDownload, faEnvelope, faFolder, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='bg-[#292F36] text-gray-300'>
            <div className='container mx-auto py-10'>
            <h1 className='text-7xl text-center'>Developer</h1>
            <div className='flex'>
                <div className='border-4 border-teal-300 rounded-tl-[180px] rounded-br-[180px] p-5 py-10'>
                   <div className='flex flex-col items-center'>
                   <Image  src='/assates/logo img.png' width={80} height={80} className='rounded-full border-4 border-teal-300' alt='developer image'/>
                    <h1 className='mt-3'>Rashel</h1>
                    <p>Front-End Developer</p>
                   </div>
                   <ul className='my-2'>
                    <li className='flex gap-2'><FontAwesomeIcon icon={faEnvelope} className="w-3 text-[#12F7D6]" />rashelmahmudraj1998@gmail.com</li>
                    <li className='flex gap-2'> <FontAwesomeIcon icon={faLocationDot} className="w-3 text-[#12F7D6]"/>Bangladesh</li>
                    <li className='flex gap-2'><FontAwesomeIcon icon={faFolder} className="w-3 text-[#12F7D6]"/>fresher developer</li>
                    <li className='flex gap-2'><FontAwesomeIcon icon={faWhatsapp} className="w-3 text-[#12F7D6]"/>+8801835199061</li>
                   </ul>
                   <ul className='flex gap-2'>
                    <li className='bg-[#12F7D6] text-black font-semibold rounded-full px-3'>HTML</li>
                    <li className='bg-[#12F7D6] text-black font-semibold rounded-full px-3'>CSS</li>
                    <li className='bg-[#12F7D6] text-black font-semibold rounded-full px-3'>JS</li>
                    <li className='bg-[#12F7D6] text-black font-semibold rounded-full px-3'>REACT</li>
                   </ul>
                   <button className='flex justify-center items-center gap-2 bg-white text-gray-300 font-semibold text-[#292F36] text-xl leading-6 p-4 rounded-full my-3'>Download CV <FontAwesomeIcon  icon={faDownload} className='w-5 text-gray-400'/></button>

                </div>
                <div></div>
                <div></div>
            </div>

            </div>
           
        </div>
    );
};

export default Banner;