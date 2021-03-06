import React from 'react';
import { Link } from "react-router-dom";
import FadeIn from 'react-lazyload-fadein';

import Video from '../Video';

import '../../styles/content.css';
import uav from '../../images/uav.jpg';
import groundstation from '../../images/groundstation.jpg';

const Content = () => (
  <section>
    <div className="content--med">
      {/* CONTENT */}
      <div className="content">
        <div className="content__img img--loader">
          <FadeIn height={500}>
            {
              onload => (
                <img
                  onLoad={onload}
                  src={uav}
                  className="img-fluid shadow"
                  alt="uav"
                />
              )
            }
          </FadeIn>
        </div>
        <div className="content__text">
          <h1>Running Start Program</h1>
          <h3>Pre-semester review classes</h3>
          <p>
            Prep Classes are designed to give students a better
            foundation to start the courses they will be taking in
            the upcoming semesters.
                            </p>
          <p>
            Eligible students have the option of taking the respective
            proficiency exam after completing the boot camp and possibly
            test out of the course.
                            </p>
          <a href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/running-start-program/">Running Start Program {'\u25B8'}</a>
        </div>
      </div>
    </div>
    {/* CONTENT */}
    <div className="">
      <div className="content">
        <div className="content__img img--loader">
          <FadeIn height={500}>
            {
              onload => (
                <img
                  onLoad={onload}
                  duration={100}
                  src={groundstation}
                  className="img-fluid shadow"
                  alt="groundstation"
                />
              )
            }
          </FadeIn>
        </div>
        <div className="content__text">
          <h1>3SP</h1>
          <h3>STEM Student Scholars Program</h3>
          <p>
            Promotes excellence
            in knowledge, skills and ability of a select group of STEM students
            to ensure their success in securing research internships and successful
            transfer to their targeted 4-year institution.
                            </p>
          <Link to="/3sp">Learn More {'\u25B8'}</Link>
        </div>
      </div>
    </div>

    {/* CONTENT */}
    <div className="content--med">
      <div className="content content-video">
        <div className="content__video">
          <Video className="shadow" />
        </div>
        <div className="content__text">
          <h1>Students talk STEM</h1>
          <h3>
            Listen to BCC students discuss their
            experiences in the STEM program.
                            </h3>
        </div>
      </div>
    </div>

    {/* CONTENT */}
    <div className="content--dark">
      <div className="content">
        <div className="content__text">
          <h1>Interested in research?</h1>
          <h3>Sign up for our newsletter!</h3>
        </div>

        <div className="content__form">
          <form  action="https://formspree.io/stem@bergen.edu" method="POST" className="form">

            <div className="form__item">
              <div className="form__one">
                <input required placeholder="Please enter an email" type="text" className="form__item-input" />
                <button type="submit" className="form__button form__button--dark">
                  Submit
                                    </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    {/* MAIN */}
  </section>
);

export default Content;
