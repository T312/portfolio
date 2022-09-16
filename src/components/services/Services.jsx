import React from "react";
import "./services.css";
import Image1 from "../../assets/avt.jpg";
import Image2 from "../../assets/avt.jpg";
import Image3 from "../../assets/avt.jpg";
const data = [
  {
    id: 1,
    image: Image1,
    title: "Website bán quần áo",
    description:
      "Dự án thuộc học phần lập trình web, gồm các chức năng cơ bản của một websize bán hàng",
    tools: "HTML, CSS, JavaScript, PHP,  MySQL",
  },
  {
    id: 2,
    image: Image2,
    title: "Website Portfolio",
    description: "Websize là dự án cá nhân nhằm giới thiệu bản thân",
    tools: "HTM, CSS, JavaScript, React",
  },
  {
    id: 3,
    image: Image2,
    title: "Website Portfolio",
    description: "Websize là dự án cá nhân nhằm giới thiệu bản thân",
    tools: "HTM, CSS, JavaScript, React",
  },
];
const Services = () => {
  return (
    <section className="services container section" id="services">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ id, image, title, description, tools }) => {
          return (
            <div className="services__card" key={id}>
              <img src={image} alt="" className="services__img" />
              <h3 className="services__title">{title}</h3>
              {/* <p className="services description">{description}</p>
              <p className="services tools">{tools}</p> */}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
