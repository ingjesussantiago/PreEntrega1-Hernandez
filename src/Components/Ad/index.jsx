import React,{Children} from 'react'

const Ad = ({Children}) => {
  return (
    <div class='ad-containe'>
        <div class='ad'>
            {Children}
        </div>
    </div>
  )
}

export default Ad