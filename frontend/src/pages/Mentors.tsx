import React from "react";
import "./Mentors.css";
import { FaArrowRight } from "react-icons/fa";
import Cards from '../components/mentor_card'
import img2 from '/girl.png'

const Mentors = () => {
  return (
    <div className="Mentors">
    <div className="mentors-container">
      <p className="mentors-label">OUR INSTRUCTORS</p>
      <h2 className="mentors-title">Meet Our Expert <br /> Instructor</h2>
      <p className="mentors-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <div className="mentors-buttons">
        <button className="contact-button">
          Contact Us <FaArrowRight />
        </button>
        <button className="find-courses-button">
          Find Courses <FaArrowRight />
        </button>
      </div>
    </div>
    <div className="Mentees">
      <Cards name="Esther Howard"
              title="Junior Instructor"
              image={img2} />
       <Cards name="Esther Howard"
              title="Junior Instructor"
              image={img2} />
        <Cards name="Esther Howard"
              title="Junior Instructor"
              image={img2} />
         <Cards name="Esther Howard"
              title="Junior Instructor"
              image={img2} />
 </div>
    </div>
  );
};

export default Mentors;