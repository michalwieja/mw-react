import React from "react";
import home1 from "../img/yellow-cap2.jpg";
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Choose a job you <span>love</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>and you will never</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}> have to work.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact me for any web development ideas that you have.
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
