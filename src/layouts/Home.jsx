import React, { useState } from 'react'
import { QA } from './SentencesWithDetails'

function Home() {
   const [index, setIndex] = useState(0)
   // const [isShowQ, setIsShowQ] = useState(false)
   const [isShowA, setIsShowA] = useState(false)
   let tests = QA[index]
   const nextQA = index < QA.length - 1

    const ClickNextButton = () => {
      if(nextQA){
         setIndex(index + 1)
       } else {
         setIndex(0)
      }
    }
   // const showQuestion = () => {
   //    setIsShowQ(!isShowQ)
   // }

   const showAnswer = () => {
      setIsShowA(!isShowA)
   }
return (
   <div className='flex justify-center w-1/2 h-72 mt-20 m-auto rounded-xl bg-lime-200'>
         <div className=''>
            <div className='text-end py-5'>
               <button className=' bg-indigo-700 px-7 py-2 rounded-lg text-white text-lg ' onClick={ClickNextButton}>Next</button>
            </div>
            <div className='flex'>
             <p className=' text-gray-500 border-indigo-700 px-4 py-2 border-2 rounded text-lg '>
              Q: {tests.question} 
             </p>
             <span className='  ml-5 bg-indigo-700 items-center px-4 py-2 rounded-lg text-white cursor-pointer' onClick={showAnswer}> { isShowA ? 'Hide' : 'Show' }</span>
            </div>
         
             <div className='py-2 px-5 fixed text-red-500'>   {isShowA && <p> Ans: {tests.answer}</p> }</div>     

         </div>
      
   </div>
 )
    
}

export default Home
