import React from 'react'
import PickMeals from '../Assets/pick-meals-image.png';
import ChooseMeals from '../Assets/choose-image.png';
import DeliveryMeals from '../Assets/delivery-image.png'

function Work() {
    const workInfoData = [
      {
        image: PickMeals,
        title: "Pick Meals",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sapiente quas a",
      },
      {
        image: ChooseMeals,
        title: "Choose Meals",
        text: "Lorem ipsum  adipisicing elit. Enim sapiente quas a",
      },
      {
        image: DeliveryMeals,
        title: "Delivery Meals",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim sapiente quas a",
      }

    ]
  return (
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className="primary-subheading">Work</p>
            <h2 className='primary-subheading'>How It Works</h2>
            <p className="primary-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Aspernatur nisi facilis dignissimos veritatis eos laboriosam, rerum rem quis distinctio praesentium!
            </p>

        </div>

        <div className="work-section-bottom">
            {
                workInfoData.map((data) => (
                    <div className="work-section-info">
                        <div className="info-boxes-img-container">
                            <img src={data.image} alt="" />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>

                    </div>
                ))
            }
        </div>
     
    </div>
  )
}

export default Work
