import React from 'react'
import AboutBackgroundImage from "./Assets/about-background-image.png"
import AboutBackground from './Assets/about-background.png'
import { BsFillPlayCircleFill } from "react-icons/bs";

function About() {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>

       <div className='about-section-image-container'>
           <img src={AboutBackgroundImage} alt="" />
       </div>
      <div className='about-section-text-container'>
                <p className='primary-subheading'>About</p>
                <h1 className="primary-heading">
                  Food is Important Part of a Balanced Diet
                </h1>
                <p className='primary-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa labore voluptate voluptas cupiditate unde, error in temporibus sapiente explicabo molestias nam nobis laboriosam vitae fugit cumque laborum quam maxime velit?</p>
                  <div className="about-buttons-container">
                    <button className='secondary-button'>Learn more</button>
                    <button className='watch-video-button'>
                      {" "}
                    <BsFillPlayCircleFill />
                      watch video
                    </button>
                  </div>
      </div>
    </div>

    
  )
}

export default About
