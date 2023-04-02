import { faAward, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../App.css";

const Awards = () => {
  return (
    <div className="awards-container">
      <div className="awards-icon-container">
        <div className="icon-container">
          <FontAwesomeIcon icon={faTrophy} className="icon" />
        </div>
        <h3 className="award-name">Best Renovation Company</h3>
      </div>
      <div className="awards-icon-container">
        <div className="icon-container">
          <FontAwesomeIcon icon={faAward} className="icon" />
        </div>
        <h3 className="award-name">Top Smart Home Innovator</h3>
      </div>

      <div className="awards-icon-container">
        <div className="icon-container">
          <FontAwesomeIcon icon={faStar} className="icon" />
        </div>
        <h3 className="award-name">Best Customer Service</h3>
      </div>
    </div>
  );
};

export default Awards;
