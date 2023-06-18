import React from 'react'
import "./Intro.css"
import Me from "../../Images/me.png"

const Intro = () => {
  return (
    <div className="i" >
      <div className="i-left">
    <div className='i-left-wrapper'>
      <h2 className='i-intro'>Hello, My name is</h2>
      <h1 className='i-name'>VIRAT</h1>
      <div className='i-title'>
        <div className='i-title-wrapper'>
          <div className='i-title-item'>Web Developer</div>
          <div className='i-title-item'>UI/UX Designer</div>
          <div className='i-title-item'>Coding Enthusiast</div>
          <div className='i-title-item'>EX-NCC Cadet</div>
          <div className='i-title-item'>Bsc-Maths Graduate</div>
          <div className='i-title-item'>MCA Aspirant</div>


        </div>
      </div>

    <p className='i-desc'>
      I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services, online stores
    </p>
      
    </div>


      </div>
      <div className="i-right">
        <div className='i-bg'>hello</div>
        <img src={Me} alt='' className='i-img'/>

      </div>
      
      </div>
  )
}

export default Intro