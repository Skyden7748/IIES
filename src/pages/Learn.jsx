import React from 'react'
import './Learn.css'
import { useState } from 'react'

function Learn() {
    const [like, setlike] = useState(1);


  return (
    <div className='learn'>
    <h1>like count of shubham gupta is {like}</h1>
    <button className='btn' onClick={() => setlike(like *  69)}>like</button>
    <button className='btn' onClick={() => setlike(like - 69)}>dislike</button>
    </div>

    
  )
}

export default Learn