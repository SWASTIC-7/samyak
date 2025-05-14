import "./Cards.css"; // Import the CSS file
import womanImage from "/girl2.png"; // Replace with your actual image path
import { FaClock, FaBook, FaUser, FaWhatsapp } from "react-icons/fa";

const courses_card2 = () => {
  return (
    <div className="card-container2">
        <img className="pattern" src="pattern.svg"></img>
      <div className="card-content">
        <p className="course-label">📚 POPULAR COURSES</p>
        <h2 className="course-title">Dropper JEE Advanced <br /> Mentorship Programme</h2>
        <div className="course-features">
          <div><FaClock /> 3/6 Months</div>
          <div><FaBook /> Short Notes</div>
          <div><FaUser /> 1 To 1 Mentorship</div>
          <div><FaWhatsapp /> 24x7 Whatsapp Support</div>
        </div>
        <button className="join-button2">JOIN WITH US</button>
      </div>
      <div className="card-image">
        <img src={womanImage} alt="Mentor" className="mentor-image" />
      </div>
    </div>
  );
};

export default courses_card2;