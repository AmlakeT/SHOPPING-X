import React from 'react'
import SentencesWithDetails from './SentencesWithDetails'
function Home() {
 const sentences = [
    'this is the first sentence',
    'this is the sencond sentence', 
    'thisis the third sentence'
 ]
 const details = [
    'this is the details of the first sentence',
    'this is the details of the sencond sentence',
    'this is the details of the third sentence'
 ]

  return (
    <div>
        {sentences.map((sentence,index) => (    
        <SentencesWithDetails 
         key = {index}
        sentence = {sentence}
        details = {details[index]}  />
        ))}
    </div>
  )
}

export default Home
