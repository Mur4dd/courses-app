import React from 'react'
import '../css/Main.css'
import { courses } from './Data'

function Main() {
    return (
        <div className='main'>
            {
                courses.map((course , index) => (
                    <div className='course' key={index}>
                        <div className='course-img'>
                            <img src={course.image} alt="photo" />
                        </div>
                        <div className='course-title'>{course.title}</div>
                        <div className="course-desc">{course.desc}</div>
                        <div className="course-price">{course.price}$</div>
                        <div className="buy-now"><button className='buy-now-button'>Buy Now</button></div>
                    </div>
                ))
            }
        </div>
    )
}

export default Main