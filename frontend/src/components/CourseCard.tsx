import "./Cards.css";

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
}

const CourseCard: React.FC<CourseCardProps> = ({
  variant,
  label,
  title,
  features,
  imageSrc,
  buttonText,
  onButtonClick
}) => {
  const containerClass = variant === 'primary' ? 'card-container' : 'card-container2';
  const buttonClass = variant === 'primary' ? 'join-button' : 'join-button2';

  return (
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
        <button className={buttonClass} onClick={onButtonClick}>
          {buttonText}
        </button>
      </div>
      <div className="card-image">
        <img src={imageSrc} alt="Course" className="mentor-image" />
      </div>
    </div>
  );
};

export default CourseCard; 