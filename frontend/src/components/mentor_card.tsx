import "./Cards.css";
type MentorCardProps = {
  name: string;
  title: string;
  image: string;
};
const mentor_card = ({ name, title, image }: MentorCardProps) => {
  return (
    <div className="mentor-card">
      <img src={image} alt={name} className="mentor-img" />
      <div className="share-icon">
        <img width={30} height={30} src="Share.svg"></img>
      </div>
      {/* <div className="mentor-strip"> */}

      <div className=" mentor-info">
        <div className=" mentor-nt">
          <p className="mentor-name">{name}</p>
          <p className="mentor-title">{title}</p>
        </div>
        <div className="circlebg">
          <img width={20} height={20} src="arrow2.svg" alt="svg" />
        </div>

      </div>


      {/* </div> */}

    </div>
  );
};

export default mentor_card;
