import { useEffect, useState } from "react";
import "../App.css";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="align-items-center">
      {isVisible && (
        <button className="scroll-to-top-button " onClick={handleClick}>
          ^
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
