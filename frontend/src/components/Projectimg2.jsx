import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";
import "../Stylesheet/Project.css";

const projects = [
  //-----------------------------------row1------------------------------------------------
  {
    src: "https://static.wixstatic.com/media/820b23_6a26b8856d7b48b4b45e1c13171277d5~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/PUNJABI-BAGH-FAMILY-LOUNGE-14-07-2023-CAM-01_POST.jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
    link: "/Demo2",

  },
  {
    src: "https://static.wixstatic.com/media/820b23_44de9d6778744f10b09112421c22cb04~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/05%20copy.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_4e1b29303b6b4e90a94bb99e4c9ba261~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Living_AA.jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
    link: "/Projectcontent1",
  },





  //-----------------------------------row2------------------------------------------------
  {
    src: "https://static.wixstatic.com/media/820b23_18c24bb4900f48938c6ec8b8556e284c~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/108%20Victory%20Valley_Living%20Dining_Cam%2005_2023-07-19.jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/aaeed6_5c3974716f9041c19e731562db1f783b~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FF_Master%20Bedroom_View%201A.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
    link: "/Projectcontent1",
  },
  {
    src: "https://static.wixstatic.com/media/a511f3_7c213a437f3a4c5cb78cc4a37f3730b4~mv2.jpg/v1/fill/w_458,h_319,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/The%20Show%20Home_9.jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
    link: "/Projectcontent1",
  },








  //-----------------------------------row3------------------------------------------------
  {
    src: "https://static.wixstatic.com/media/aaeed6_872b189e30b647e785982db41fa271fc~mv2.png/v1/fill/w_464,h_300,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/14_%20SON'S%20BEDROOM%20VIEW%201.png",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
  },
  {
    src: "https://static.wixstatic.com/media/76aad7_08fb3b5abfda49d885ce7a4c2e38bd91~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Araya_Living%20Dining_Cam%2002.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
  },
  {
    src: "https://static.wixstatic.com/media/76aad7_54485b325d524c7f808abe72f44338ed~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Chalkstudio%20office-12.jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
  },








//--------------------------row4----------------------------------------
  {
    src: "https://static.wixstatic.com/media/25240c_4d70ffb000fd482eb4caa734fc6dd779~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/COnfrence%20Area_02.jpg",
    title: "The Japandi Home",
    location: "Pioneer Araya",
    category: "Residential",
    size: "3500 sqft",
    place: " Gurugram",
  },
  {
    src: "https://static.wixstatic.com/media/76aad7_7c34c84129ca464ba6d2f8d4a38d8fc0~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/CG%20Office%20Tower%201_Meeting%20Room%203_Cam%2001_2023-10-14.jpg",
    title: "The Zephyr Villa",
    location: "Goa Villa",
    category: "Hospitality",
    size: "3000 sqft",
    place: "Siolim , Goa",
  },
  {
    src: "https://static.wixstatic.com/media/820b23_dc5f2f6c2c0e418d9ee1acacc3905d9e~mv2.jpg/v1/fill/w_464,h_300,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/%C2%A9AG-DSC02844-Edit-min.jpg",
    title: "Home in the Hills",
    location: "Rishikesh Villa",
    category: "Hospitality",
    size: "5000 sqft",
    place: "Rishikesh",
  },
];

const Projectimg2 = () => {
  const groupedProjects = [];
  for (let i = 0; i < projects.length; i += 3) {
    groupedProjects.push(projects.slice(i, i + 3));
  }

  return (
    <div className="proj_home mt-2 pb-15">
      {groupedProjects.map((row, rowIndex) => {
        const rowRef = useRef(null);
        const isRowInView = useInView(rowRef, { margin: "-100px" });
 
        return (
          <motion.div
            key={rowIndex}
            ref={rowRef}
            className="gallery2 "
            initial={{ opacity: 0, y: 100 }}
            animate={isRowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" , delay: 0.2 }}
          >
            {row.map((project, index) => (
              <Link
                to={project.link}
                key={index}
                className="gallery-item image-overlay"
              >
                <div className="gallery-item image-overlay">
                  <img src={project.src} alt={`Gallery ${index + 1}`} />
                  <div className="overlay-box">
                    <p className="overlay-title">{project.title}</p>
                    <div className="overlay-content">
                      <hr />
                      <p>{project.location}</p>
                      <hr />
                      <p>{project.category}</p>
                      <hr />
                      <p>{project.size}</p>
                      <hr />
                      <p>{project.place}</p>
                      <hr />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </motion.div>
        );
      })}
    </div>
  );
};

export default Projectimg2;
