import React from 'react'
import Item from '../../Components/Item'
import "./styles.scss"

const ItemListContainer = () => {
  return (
    <div className='ItemCard'>
      <Item title={"Samurai 1"} title2={"ok"}/>
      <Item title={"Samurai 2"}/>
      <Item title={"Samurai 3"}/>
      <Item title={"Samurai 4"}/>
     
    </div>
  )
}

export default ItemListContainer