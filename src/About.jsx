import React from 'react';
import web from "../src/images/About.png"
import Common from './Common';

const About = () => {

    return (
        <>
          <Common
              name='Something About Me and my '
                btnname='Contact Us'
                visit='/contact'
                imgsrc={web}
          />  
        </>
    )
};

export default About;
