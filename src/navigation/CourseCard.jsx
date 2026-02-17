import React from 'react'

export default function CourseCard(props) {
  return (
    <>
        <div className="course_cards">
              <img
                src={props.image}
                className="scaleimg image"
                alt={props.alter}
              />
              <span>
                <h5>{props.courseName}</h5>
                <p>
                  {props.courseDescrip}
                </p>
                <button className="cards-btn" onClick={props.onClick}>Enroll Now</button>
              </span>
            </div>
    </>
  )
}
