import React from "react";
import { Helmet } from "react-helmet";
import "/src/Home.css";
export default function Home() {
  return (
    <>
       <Helmet>
        <title>Home Page</title>
        
        <meta
          name="description"
          content="This is the home page of my React website."
        />
      </Helmet>
      <section className="hero-section">
        <div className="container">
          <div className="box">
            <h2>Welcome to Student Course Management System</h2>
            <h1>Arfa Kareem Technology Incubator</h1>
            <p>
              This is a student course management system where you can manage
              your courses and students.
            </p>
            <span>
              <button>Enroll Now</button>
              <button>Learn More</button>
            </span>
          </div>
        </div>
      </section>
      <main>
        <section className="main_section">
          <div className="m_cont">
            <div className="cont cont-1">
              <h3>Unlock your Potential</h3>
              <p>
                Arfa Karim Technology Incubator (AKTI) is more than an
                incubator; it's a launchpad for your tech career. We bridge the
                gap between academic knowledge and real-world success, offering
                a dynamic blend of education, incubation, and opportunities for
                tech enthusiasts.
              </p>
            </div>
            <div className="cont cont-2">
              <div className="block">
                <span>
                  <img src="/a man smilling.svg" alt="" />
                  <p>
                    Quality Education Our 100+ IT programs provide you with the
                    knowledge and skills demanded by today's tech industry.
                  </p>
                </span>
              </div>
              <div className="block">
                <span>
                  <img src="/smillingGirl.svg" alt="" />
                  <p>
                    Quality Education Our 100+ IT programs provide you with the
                    knowledge and skills demanded by today's tech industry.
                  </p>
                </span>
              </div>
              <div className="block">
                <span>
                  <img src="/man smilling.svg" alt="" />
                  <p>
                    Quality Education Our 100+ IT programs provide you with the
                    knowledge and skills demanded by today's tech industry.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </section>
        <section className="main-sect-2">
          <div className="contain">
            <div className="course_cards">
              <img
                src="/web devlop.jpg"
                className="scaleimg image"
                alt=""
              />
              <span>
                <h5>web development</h5>
                <p>
                  Forme image manipulation to create stunnign visual content,
                  unleash your creativity in the digital realm.
                </p>
                <button className="cards-btn">Explore Programs</button>
              </span>
            </div>
            <div className="course_cards">
              <img
                src="/graphic designing.svg"
                className="scaleimg image"
                alt=""
              />
              <span>
                <h5>Graphic Designing</h5>
                <p>
                  Forme image manipulation to create stunnign visual content,
                  unleash your creativity in the digital realm.
                </p>
                <button className="cards-btn">Explore Programs</button>
              </span>
            </div>
            <div className="course_cards">
              <img
                src="/digi media merketing.svg"
                className="scaleimg image"
                alt=""
              />
              <span>
                <h5>web development</h5>
                <p>
                  Forme image manipulation to create stunnign visual content,
                  unleash your creativity in the digital realm.
                </p>
                <button className="cards-btn">Explore Programs</button>
              </span>
            </div>
            <div className="course_cards">
              <img
                src="/ai website generating.svg"
                className="scaleimg image"
                alt=""
              />
              <span>
                <h5>web development</h5>
                <p>
                  Forme image manipulation to create stunnign visual content,
                  unleash your creativity in the digital realm.
                </p>
                <button className="cards-btn">Explore Programs</button>
              </span>
            </div>
            <div className="course_cards">
              <img
                src="/basic computer.svg"
                className="scaleimg image"
                alt=""
              />
              <span>
                <h5>web development</h5>
                <p>
                  Forme image manipulation to create stunnign visual content,
                  unleash your creativity in the digital realm.
                </p>
                <button className="cards-btn">Explore Programs</button>
              </span>
            </div>
            <div className="course_cards">
              <img
                src="/web devlop.jpg"
                className="scaleimg image"
                alt=""
              />
              <span>
                <h5>web development</h5>
                <p>
                  Forme image manipulation to create stunnign visual content,
                  unleash your creativity in the digital realm.
                </p>
                <button className="cards-btn">Explore Programs</button>
              </span>
            </div>
            <div className="course_cards">
              <img
                src="/graphic designing.svg"
                className="scaleimg image"
                alt=""
              />
              <span>
                <h5>web development</h5>
                <p>
                  Forme image manipulation to create stunnign visual content,
                  unleash your creativity in the digital realm.
                </p>
                <button className="cards-btn">Explore Programs</button>
              </span>
            </div>
            <div className="course_cards">
              <img
                src="digi media merketing.svg"
                className="scaleimg image"
                alt=""
              />
              <span>
                <h5>web development</h5>
                <p>
                  Forme image manipulation to create stunnign visual content,
                  unleash your creativity in the digital realm.
                </p>
                <button className="cards-btn">Explore Programs</button>
              </span>
            </div>
            <div className="course_cards">
              <img
                src="/web devlop.jpg"
                className="scaleimg image"
                alt=""
              />
              <span>
                <h5>web development</h5>
                <p>
                  Forme image manipulation to create stunnign visual content,
                  unleash your creativity in the digital realm.
                </p>
                <button className="cards-btn">Explore Programs</button>
              </span>
            </div>
          </div>
        </section>

        {/* main section 3 */}
        <section className="main-sect-3">
          <div className="contt">
            <h2>Supercharge Your Career Potential</h2>
            <p>
              At Arfa Karim Technology Incubator, we're committed to empowering
              your career journey. Our programs equip you with the skills that
              today's job market craves. Whether you're starting or advancing,
              AKTI's programs are your direct path to career success.
            </p>
            <span>
              <button>How to Apply</button>
              <button>More About AKTI</button>
            </span>
          </div>
        </section>
      </main>
    </>
  );
}
