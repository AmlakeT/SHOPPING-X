import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='mt-10 space-y-7 px-10'> 
        <p className='text-lg'>The page is not found!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat provident consequatur labore est perferendis esse quia dolores accusamus repudiandae excepturi distinctio doloremque, obcaecati neque reprehenderit, iure incidunt. Maiores, quibusdam quae.</p>
         <p className='' >Go to <Link to = "/">Home Page</Link> </p>
    </div>

  )
}

export default NotFound