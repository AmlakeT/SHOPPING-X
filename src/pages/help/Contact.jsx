import React from 'react'

const Contact = () => {
    return (
        <div className=" w-72 mt-5 flex flex-col">
          <h3 className='text-xl'>Contact Us</h3>
          <form className=' mt-5 flex  space-y-5 flex-col'>
            <label className='flex flex-col'>
              <span>Your email:</span>
              <input className='border w-full'  type="email" name="email" required />
            </label>
            <label>
              <span>Your message:</span>
              <textarea className='border w-full' name="message" required></textarea>
            </label>
            <button className=' w-fit border py-2 px-3 mt-3 rounded-md bg-gray-500'>Submit</button>
          </form>
        </div>
      )
}

export default Contact