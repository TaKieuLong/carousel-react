import React from 'react'
import{FaFacebook, FaYoutube, FaInstagram, FaPinterest, FaTwitter} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='w-full bg-gray-100 py-16'>
        <div className='max-w-[1240px] mx-auto flex flex-col px-4'>
            <div className='sm:flex text-center justify-between items-center'>
                <h1>BEACHES</h1>
                <div className='flex justify-between w-full sm:max-w-[280px] my-4'>
                <FaFacebook className='icon mr-2' />
                <FaTwitter className='icon mr-2' />
                <FaYoutube className='icon mr-2' />
                <FaPinterest className='icon mr-2' />
                <FaInstagram className='icon' />
                </div>
            </div>
            <div className='flex justify-between'>
                <ul className='lg:flex'>
                    <li>About</li>
                    <li>Partnership</li>
                    <li>Careers</li>
                    <li>Newsroom</li>
                    <li>Advertising</li>
                </ul>
                <ul className='text-right lg:flex'>
            <li className=''>Home</li>
            <li className=''>Destinations</li>
            <li className=''>Travel</li>
            <li className=''>View</li>
            <li className=''>Book</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer