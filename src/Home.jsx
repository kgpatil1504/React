import React from 'react';
import web from "../src/images/Home.png"
import Common from './Common';


const Home = () => {

    return (
        <>
            <Common
                name='Grow Your Skills in '
                btnname='Register Now'
                visit='/services'
                imgsrc={web}
            />

        </>
    )
};

export default Home;
