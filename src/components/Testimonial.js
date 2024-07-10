import React from 'react'
import ProfilePic from '../Assets/john-doe-image.png'
import { AiFillStar } from 'react-icons/ai'

function Testimonial() {
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className="primary-subheading">Testimonials</p>
            <h1 className='primary-heading'>What they are Saying</h1>
            <p className='primary-text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, unde natus neque nihil et, minus cupiditate '
                molestias doloremque velit, deserunt tenetur assumenda laudantium fugiat. Magnam amet assumenda qui autem libero?
            </p>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit necessitatibus tenetur excepturi ullam dolorem aperiam hic amet perferendis possimus. Placeat blanditiis corrupti quidem veniam deserunt dolorum dolores? Corrupti, distinctio quas!
                </p>

            <div className="testimonial-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
            </div>
        </div>
      
    </div>
  )
}

export default Testimonial
