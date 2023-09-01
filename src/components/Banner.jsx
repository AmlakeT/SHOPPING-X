import React from 'react';
import { Link } from 'react-router-dom';

function Banner({ title, text, img }) {
  return (
    <div>
      <div className='flex flex-col md:flex-row rounded-lg bg-gray-200 mx-4 md:mx-20 mb-10 md:mb-20'>
        <div className='w-full md:w-1/2 flex flex-col items-center justify-center'>
          <h2 className='text-4xl text-center flex sm:text-center font-medium'>{title}</h2>
          <p className='px-7 py-7'>{text}</p>
          <Link onClick={() => window.scrollTo(0, 0)} to='categories/all'>
            <button className='bg-black text-white mb-4 md:mb-5 px-5 py-3 rounded-lg text-lg'>
              Shop now
            </button>
          </Link>
        </div>
        <div className='w-full md:w-1/2'>
          <img src={img} alt='banner' className='w-full' />
        </div>
      </div>
    </div>
  );
}

export default Banner;