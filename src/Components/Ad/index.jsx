import React from 'react'

const Ad = ({Children}) => {
  return (
    <div className="ad-container">
        <div className='ad'>
            {Children}
        </div>
    </div>
  )
}

export default Ad