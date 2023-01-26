import React from 'react'

const CustomInput = (props) => {
    const {type,name,placeholder,className} = props
  return (
    <>
       <div>
      <input 
      type={type}
      name={name}
      placeholder={placeholder}
      className={`form-control ${className}`}
       required/>
      </div>
    </>
  )
}

export default CustomInput
