import React from 'react'
import './globals.css'

const MainTitle = ({title}: any) => {
  return (
    <div className='main_title d-flex justify-content-center align-items-center'>
        <h1 className='title'> {title} </h1>
    </div>
  )
}

export default MainTitle