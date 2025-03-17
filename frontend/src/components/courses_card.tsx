import React from "react";
import "./Cards.css"; // Import the CSS file
import womanImage from "/girl2.png"; // Replace with your actual image path
import { FaClock, FaBook, FaUser, FaWhatsapp } from "react-icons/fa";

const courses_card = () => {
  return (
    <div className="card-container">
        <img className="pattern" src="pattern.svg"></img>
      <div className="card-content">
        <p className="course-label">📚 POPULAR COURSES</p>
        <h2 className="course-title">Dropper JEE Advanced <br /> Mentorship Programme</h2>
        <div className="course-features">
          <p><FaClock /> 3/6 Months</p>
          <p><FaBook /> Short Notes</p>
          <p><FaUser /> 1 To 1 Mentorship</p>
          <p><FaWhatsapp /> 24x7 Whatsapp Support</p>
        </div>
        <button className="join-button">JOIN WITH US</button>
      </div>
      <div className="card-image">
        <img src={womanImage} alt="Mentor" className="mentor-image" />
      </div>
    </div>
  );
};

export default courses_card;