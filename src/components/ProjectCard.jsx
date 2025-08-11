import React from "react";
import Image1 from "../assets/image.png";
import LinkArrow from "../assets/icons/LinkArrow.png";
import { Link } from "react-router-dom";

const ProjectCard = ({ id, image, title, subtitle, url }) => {
  return (
    <Link to={`/projectDetail/${id}`}>
      <div
        className="relative w-full h-48 mb-2 rounded-md bg-no-repeat bg-cover bg-center transition duration-300 hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Image1})`,
        }}
      >
        <img src={LinkArrow} alt="" className="absolute top-[2%] right-[1%]" />
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
