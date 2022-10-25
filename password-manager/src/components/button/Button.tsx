import React from 'react' 
import './button.css'
const Button = (props:any) => {
  return (
      <>
          <button type='submit' className={props.class_name}>{props.text}</button>
      </>
  )
}

export default Button