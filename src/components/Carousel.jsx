import React, { useState } from 'react';
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from 'react-icons/bs';


const sliderData = [
  {
    url:
      'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80',
  },
  {
    url:
      'https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
  },
  {
    url:
      'https://images.unsplash.com/photo-1682687220989-cbbd30be37e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const length = sliderData.length
const prevSlide = () => {
    setSlide(slide === length -1 ? 0 : slide + 1)
}
const nextSlide = () => {
    setSlide(slide === 0 ? length -1 : slide - 1)
}
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 relative justify-center items-center">
      <BsArrowLeftSquareFill onClick={prevSlide} className='absolute top-[50%] text-white text-3xl cursor-pointer left-8'/>
      <BsArrowRightSquareFill onClick={nextSlide} className='absolute top-[50%] text-white text-3xl cursor-pointer right-8'/>
      {sliderData.map((item, index) => (
        
        <div className={index === slide ? 'opacity-100' : 'opacity-0'} key={index}>
          {index === slide && <img className="w-full rounded-md" src={item.url} alt="/" />}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
