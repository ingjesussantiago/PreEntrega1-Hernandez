import React from 'react'

const Item = ({title}) => {
  return (
    <div ClassName="card" style={{width: "18rem"}}>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Seppuku_8-10-08.png/250px-Seppuku_8-10-08.png" ClassName="card-img-top" alt="..."/>
    <div ClassName="card-body">
      <h5 ClassName="card-title">{title}</h5>
      <p ClassName="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="/#" ClassName="btn btn-primary">Go somewhere</a>
    </div>
  </div>
  )
}

export default Item