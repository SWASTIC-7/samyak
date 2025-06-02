import './Courses.css'
import CourseCard from '../components/CourseCard'
import { FaClock, FaBook, FaUser, FaWhatsapp } from "react-icons/fa";

function Courses() {
  const courseFeatures1 = [
    { icon: <FaClock />, text: 'Full guidance during JOSAA counselling' },
    { icon: <FaBook />, text: 'Past Data Analysis' },
    { icon: <FaUser />, text: 'Guidance from your desired college seniors' },
    { icon: <FaWhatsapp />, text: '24x7 Whatsapp Support' }
  ];
  const courseFeatures = [
    { icon: <FaClock />, text: 'Till next JEE advanced' },
    { icon: <FaBook />, text: 'Short Notes' },
    { icon: <FaUser />, text: '1 To 1 Mentorship from IITians' },
    { icon: <FaWhatsapp />, text: '24x7 Whatsapp Support' }
  ];
  const courseFeatures3 = [
    { icon: <FaClock />, text: 'Till next JEE advanced' },
    { icon: <FaBook />, text: 'Short Notes' },
    { icon: <FaUser />, text: '1 To 1 Mentorship from IITians' },
    { icon: <FaWhatsapp />, text: '24x7 Whatsapp Support' }
  ]; 
  const courseFeatures4 = [
    { icon: <FaClock />, text: '1 year of mentorship' },
    { icon: <FaBook />, text: 'Short Notes' },
    { icon: <FaUser />, text: '1 To 1 Mentorship from IITians' },
    { icon: <FaWhatsapp />, text: '24x7 Whatsapp Support' }
  ];  

  const handleJoinClick1 = () => {
    // Handle join button click
    window.location.href = "https://chat.whatsapp.com/KH08ER8BvlTHo3DB51plbs";
    console.log('Join button clicked');
  };
  const handleJoinClick2 = () => {
    // Handle join button click
    window.location.href = "https://chat.whatsapp.com/JiOuZn5mvXQ0g1PLpiLPE7";
    console.log('Join button clicked');
  };
  const handleJoinClick3 = () => {
    // Handle join button click
    window.location.href = "https://chat.whatsapp.com/GOVVlAx7pVI5MYzhx3Dc07";
    console.log('Join button clicked');
  };
  const handleJoinClick4 = () => {
    // Handle join button click
    window.location.href = "https://chat.whatsapp.com/CgTl95Wx8rXELPhUkoExty";
    console.log('Join button clicked');
  };

  return (
    <div id="courses" className='Courses'>
      <div>
        <h1>Check Our Mentorship Plans</h1>
        <div>
          {/* <p>Browse all plans</p> */}
          <div><img src='arrow.svg' alt="arrow" /></div>
        </div>
      </div>
      <div className='card_container'>
        <CourseCard
          variant="primary"
          label="📚 POPULAR COURSES"
          title="JOSAA COUNSELLING PROGRAMME"
          features={courseFeatures1}
          imageSrc="/girl2.png"
          buttonText="JOIN WITH US"
          onButtonClick={handleJoinClick1}
        />
        <CourseCard
          variant="secondary"
          label="📚 POPULAR COURSES"
          title="Dropper JEE Mentorship Programme"
          features={courseFeatures}
          imageSrc="/girl2.png"
          buttonText="JOIN WITH US"
          onButtonClick={handleJoinClick2}
        />
        <CourseCard
          variant="primary"
          label="📚 POPULAR COURSES"
          title="Class 11-12 Mentorship Programme"
          features={courseFeatures3}
          imageSrc="/girl2.png"
          buttonText="JOIN WITH US"
          onButtonClick={handleJoinClick3}
        />
        <CourseCard
          variant="secondary"
          label="📚 POPULAR COURSES"
          title="Class 9-10 Mentorship Programme"
          features={courseFeatures4}
          imageSrc="/girl2.png"
          buttonText="JOIN WITH US"
          onButtonClick={handleJoinClick4}
        />
      </div>
    </div>
  )
}

export default Courses