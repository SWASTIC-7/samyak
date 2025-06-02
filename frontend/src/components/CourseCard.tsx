import "./Cards.css";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import SignInCheckModal from "./SignInCheckModal";

interface CourseFeature {
  icon: React.ReactNode;
  text: string;
}

interface CourseCardProps {
  variant: 'primary' | 'secondary';  // primary for card1, secondary for card2
  label: string;
  title: string;
  features: CourseFeature[];
  imageSrc: string;
  buttonText: string;
  onButtonClick?: () => void;
  whatsappLink?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  variant,
  label,
  title,
  features,
  imageSrc,
  buttonText,
  onButtonClick,
  whatsappLink
}) => {
  const { user, signInWithGoogle } = useAuth();
  const [showSignInModal, setShowSignInModal] = useState(false);
  const containerClass = variant === 'primary' ? 'card-container' : 'card-container2';
  const buttonClass = variant === 'primary' ? 'join-button' : 'join-button2';

  const handleButtonClick = () => {
    if (whatsappLink) {
      if (user) {
        window.open(whatsappLink, '_blank');
      } else {
        setShowSignInModal(true);
      }
    } else if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <>
      <div className={containerClass}>
        <img className="pattern" src="pattern.svg" alt="pattern" />
        <div className="card-content">
          <p className="course-label">{label}</p>
          <h2 className="course-title">{title}</h2>
          <div className="course-features">
            {features.map((feature, index) => (
              <div key={index}>
                {feature.icon} {feature.text}
              </div>
            ))}
          </div>
          <button className={buttonClass} onClick={handleButtonClick}>
            {buttonText}
          </button>
        </div>
        <div className="card-image">
          <img src={imageSrc} alt="Course" className="mentor-image" />
        </div>
      </div>
      <SignInCheckModal
        isOpen={showSignInModal}
        onClose={() => setShowSignInModal(false)}
        onSignIn={signInWithGoogle}
      />
    </>
  );
};

export default CourseCard; 