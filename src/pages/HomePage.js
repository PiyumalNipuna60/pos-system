import React from 'react'
import "./HomePage.css"

export default function HomePage(props) {
  return (
    <div>
      <h1 className='two'>his name is {props.name} age is {props.age}</h1>
      {props.children}
    </div>
  )
}
