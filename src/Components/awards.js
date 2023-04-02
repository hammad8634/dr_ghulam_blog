import { faAward, faStar, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../App.css";

const Awards = () => {
  const awardData = [
    { text: "32 years of Laparoscopic Experience", icon: faTrophy },
    { text: "Shifa International Award", icon: faAward },
    {
      text: "Recognized for services by the President of Pakistan",
      icon: faStar,
    },
  ];

  return (
    <div className="awards-container">
      {awardData.map(({ text, icon }) => (
        <div className="awards-icon-container" key={text}>
          <div className="icon-container">
            <FontAwesomeIcon icon={icon} className="icon" />
          </div>
          <h3 className="award-name">{text}</h3><br/>
        </div>
      ))}
    </div>
  );
};

export default Awards;
