import React from "react";

const AboutBox = () => {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">Tools</h3>
          <span className="about__subtitle">Vs code, Photoshop, Figma</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__title">Personal</h3>
          <span className="about__subtitle">Photography, Photo editing</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title">Language</h3>
          <span className="about__subtitle">English B1</span>
        </div>
      </div>
    </div>
  );
};

export default AboutBox;
