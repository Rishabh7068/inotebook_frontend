import React from 'react'

export const Noteitem = (props) => {
    
  return (
    <div className="my-3">
    <div className="card mx-1" >
      <div style={{
        display:"flex",
        justifyContent:"flex-end",
        position :"absolute",
        right : "0"
      }}>
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <i className="fa-solid fa-trash mx-2"></i>
        <i className="fa-solid fa-pen-to-square mx-2"></i>
      </div>
    </div>
  </div>
  )
}
