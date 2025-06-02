import "./Mentors.css";
import { FaArrowRight } from "react-icons/fa";
import Cards from '../components/mentor_card'
import img2 from '/girl.png'
import { scrollToSection } from '../utils/scroll'

const Mentors = () => {
  const handleContactUs = () => {
    scrollToSection('contact');
  };

  const handleFindCourses = () => {
    scrollToSection('courses');
  };

  return (
    <div className="Mentors" id="mentors">
      <div className="mentors-container">
        <p className="mentors-label">OUR INSTRUCTORS</p>
        <h2 className="mentors-title">Meet Our Expert <br /> Mentors</h2>
        <p className="mentors-description">
        Our mentors are IITians, subject experts, and seasoned educators who've helped thousands crack JEE. They bring real experience, smart strategies, and unmatched dedication to guide you every step of the way.
        </p>
        
        <div className="mentors-buttons">
          <button className="contact-button" onClick={handleContactUs}>
            Contact Us <FaArrowRight />
          </button>

          <button className="find-courses-button" onClick={handleFindCourses}>
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