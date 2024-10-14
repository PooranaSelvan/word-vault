import React from 'react'

 const Button = ({children,type,btnDisabled,version}) => {
  return (
    <button type={type} disabled={btnDisabled} className={`btn btn-${version}`}>{children}</button>
  )
}
export default Button