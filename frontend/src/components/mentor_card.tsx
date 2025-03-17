import React from "react";
import "./Cards.css";
import { FaShareAlt } from "react-icons/fa";

const mentor_card = ({ name, title, image }) => {
  return (
    <div className="mentor-card">
      <img src={image} alt={name} className="mentor-img" />
      <div className="share-icon">
        <img src="Share.svg"></img>
      </div>
      <div className="mentor-info">
        <p className="mentor-name">{name}</p>
        <p className="mentor-title">{title}</p>
      </div>
    </div>
  );
};

export default  mentor_card;
