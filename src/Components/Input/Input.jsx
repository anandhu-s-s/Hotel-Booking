import React from 'react'



const Input = (props) => {
  return (
    <div> <label>{props.label}</label><br/><input type={props.type} /></div>
  )
}

export default Input