import React from 'react'

const Card = ({children,changeColor}) => {
  
  return (
    <div className={changeColor? `card` : `card-black`}>{children}</div>
  )
}

export default Card