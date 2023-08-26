import React from 'react'
 import electroHero from "../image/home/electroHero.jpg"
 import furnitureHero from "../image/home/furniHero.jpg"
 import cosmoticsHero from "../image/home/cosmoHero.jpeg"
 import KichenHero from "../image/home/kichenHero.jpeg"
export const Hero = () => {
  return (
    <div>
        <section className=' grid grid-cols-3 mt-10 px-14 space-x-5'>
          <div className='relative '>
            <div className=' hover:bg-slate-900 hover:rounded '>
              <img className=' hover:opacity-50 rounded h-96' src={furnitureHero} alt="hero1" />
            </div>
            <p className='absolute top-1/3 left-32 text-white text-2xl font-bold'>A flourishing life </p>
          </div>
          <div>
          <div className='relative'>
            <div className=' hover:bg-slate-900 hover:rounded '>
              <img className='  hover:opacity-50 rounded h-96' src={electroHero} alt="hero1" />
            </div>
             <p className='absolute top-1/2 left-32 text-white text-2xl font-bold'> Electronics </p>
            </div>
          </div>
          <div>
              <div className='hover:bg-slate-900 hover:rounded '>
                 <img className='  hover:opacity-50 bg-neutral-600 object-cover rounded h-48 w-full' title='' src={cosmoticsHero} alt="hero1" />
                 <img className='  hover:opacity-50 rounded h-48 w-full' src={KichenHero} alt="hero1" />
              </div>
           </div>
        </section>
    </div>
  )
}
