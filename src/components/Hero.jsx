import React from 'react';
import electroHero from "../image/home/electroHero.jpg";
import furnitureHero from "../image/home/furniHero.jpg";
import cosmoticsHero from "../image/home/cosmoHero.jpeg";
import KichenHero from "../image/home/kichenHero.jpeg";

export const Hero = () => {
  return (
    <div>
      <section className='grid grid-cols-1 md:grid-cols-3 mt-10 px-4 md:px-14 space-y-5 md:space-y-0 md:space-x-5'>
        <div className='relative'>
          <div className='hover:bg-slate-900 hover:rounded'>
            <img className='hover:opacity-50 rounded h-64 md:h-96 w-full' src={furnitureHero} alt='hero1' />
          </div>
          <p className='absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-3xl font-bold'>
            A flourishing life
          </p>
        </div>
        <div className='relative'>
          <div className='hover:bg-slate-900 hover:rounded'>
            <img className='hover:opacity-50 rounded h-64 md:h-96 w-full' src={electroHero} alt='hero1' />
          </div>
          <p className='absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-3xl font-bold'>
            Electronics
          </p>
        </div>
        <div className='grid grid-cols-2 gap-5'>
          <div className='hover:bg-slate-900 hover:rounded'>
            <img className='hover:opacity-50 rounded h-48 md:h-64 w-full' src={cosmoticsHero} alt='hero1' />
          </div>
          <div className='hover:bg-slate-900 hover:rounded'>
            <img className='hover:opacity-50 rounded h-48 md:h-64 w-full' src={KichenHero} alt='hero1' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;