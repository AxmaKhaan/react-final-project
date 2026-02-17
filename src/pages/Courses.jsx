import React, { useState } from "react";
import CourseCard from "../navigation/CourseCard.jsx";
import "/src/Courses.css";
export default function Courses() {
  const [increment, setIncrement] = useState(0);
  const student_increment = () => {
    setIncrement(increment + 1);
  };
  return (
    <>
      <section className="main-sect-2">
        <div className="container">
          <h1>Enrolled Students</h1>
          <p>{increment}</p>
        </div>
        <div className="contain">
          <CourseCard
            courseName="Web Development"
            image="/web devlop.jpg"
            alter="web development picture"
            courseDescrip="Forme image manipulation to create stunnign visual content,unleash your creativity in the digital realm."
            onClick={student_increment}
          />
          <CourseCard
            courseName="Graphic designing"
            image="/graphic designing.svg"
            alter="web development picture"
            courseDescrip="Forme image manipulation to create stunnign visual content,unleash your creativity in the digital realm."
            onClick={student_increment}
          />
          <CourseCard
            courseName="Digital Media Marketing"
            image="/digi media merketing.svg"
            alter="web development picture"
            courseDescrip="Forme image manipulation to create stunnign visual content,unleash your creativity in the digital realm."
            onClick={student_increment}
          />
          <CourseCard
            courseName="AI Web generating"
            image="/ai website generating.svg"
            alter="web development picture"
            courseDescrip="Forme image manipulation to create stunnign visual content,unleash your creativity in the digital realm."
            onClick={student_increment}
          />
          <CourseCard
            courseName="Basic Computer"
            image="/basic computer.svg"
            alter="web development picture"
            courseDescrip="Forme image manipulation to create stunnign visual content,unleash your creativity in the digital realm."
            onClick={student_increment}
          />
          <CourseCard
            courseName="Web Designing"
            image="/web devlop.jpg"
            alter="web development picture"
            courseDescrip="Forme image manipulation to create stunnign visual content,unleash your creativity in the digital realm."
            onClick={student_increment}
          />
          <CourseCard
            courseName="Python"
            image="/graphic designing.svg"
            alter="web development picture"
            courseDescrip="Forme image manipulation to create stunnign visual content,unleash your creativity in the digital realm."
            onClick={student_increment}
          />
        </div>
      </section>
    </>
  );
}
