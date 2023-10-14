import React, { useEffect, useState } from "react";
import "./Scroller.css";

const ScrollProgressIndicator = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const updateScrollPercentage = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollableHeight = documentHeight - windowHeight;
      const percentage = (window.scrollY / scrollableHeight) * 100;

      setScrollPercentage(percentage);
    };

    window.addEventListener("scroll", updateScrollPercentage);
    return () => {
      window.removeEventListener("scroll", updateScrollPercentage);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const circleBorderRadius = 50 - scrollPercentage * 0.5;

  return (
    <div
      className="progress-circle"
      style={{
        borderRadius: `${circleBorderRadius}%`,
        animationDelay: `-${scrollPercentage}s`,
      }}
      onClick={scrollToTop}
    >
      ^
    </div>
  );
};

export default ScrollProgressIndicator;
