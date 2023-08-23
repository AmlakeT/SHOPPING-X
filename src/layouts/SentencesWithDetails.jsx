import React, { useState } from 'react'

function SentencesWithDetails({details , sentence}) {
    const [showDetails, setShowDetails] = useState(false)

    const handelDetails = () => {
        setShowDetails(!showDetails)
    }
  return (
     <div className='p-10 border text-center'>
     <p>{sentence}  <span onClick={handelDetails}>{showDetails ? "-" : "+" }</span></p>
     {showDetails && (
       <div>
         {details}
       </div>
     ) }

     </div>
  )
}

export default SentencesWithDetails