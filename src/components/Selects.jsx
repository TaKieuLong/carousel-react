import React from 'react'
import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';
import SelectCard from './SelectCard';
const Selects = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4'>
       <SelectCard bg={BoraBora} text ='Bora bora'/>
       <SelectCard bg={BoraBora2} text ='Bora bora'/>
       <SelectCard bg={Maldives2} text ='Maldives'/>
       <SelectCard bg={Maldives} text ='Maldives'/>
       <SelectCard bg={KeyWest} text ='Key West'/>
       <SelectCard bg={KeyWest} text ='Key West'/>
        {/* <div className='relative'>
            <img src={BoraBora} alt="" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='absolute bottom-4 left-4 text-2xl font-bold text-white'>Maldives</p>
            </div>
        </div>
        <div className='relative'>
            <img src={BoraBora} alt="" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='absolute bottom-4 left-4 text-2xl font-bold text-white'>Maldives</p>
            </div>
        </div>
        <div className='relative'>
            <img src={BoraBora} alt="" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='absolute bottom-4 left-4 text-2xl font-bold text-white'>Maldives</p>
            </div>
        </div>
        <div className='relative'>
            <img src={BoraBora} alt="" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='absolute bottom-4 left-4 text-2xl font-bold text-white'>Maldives</p>
            </div>
        </div>
        <div className='relative'>
            <img src={BoraBora} alt="" />
            <div className='bg-gray-900/30 absolute top-0 left-0 w-full h-full'>
                <p className='absolute bottom-4 left-4 text-2xl font-bold text-white'>Maldives</p>
            </div>
        </div> */}
    </div>
  )
}

export default Selects