import React from 'react'
import './Button.css'

const Button = (props) => {
  return (
    <button
     className={`button ${
        props.type==='primary'?'primary':props.type==='secondary'?'secondary':'teritiary'
    }`
}
      onClick={props.onClick}
    >
        <label>{props.label}</label>

    </button>
  )
}

export default Button