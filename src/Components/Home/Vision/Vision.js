import React, { useEffect } from 'react'
import './Vision.css';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
import visionImage from '../../../Assets/vision.png';

function Vision() {

    // useEffect(() => {
    //     Aos.init({ duration: 3000 });
    // }, []);

    return (
        <div className='vision'>
            <div className="vision__left" >
                <span className='vision__head'>
                    <h1 className="vision__left__our">
                        Our
                    </h1>
                    &nbsp;
                    &nbsp;
                    <h1 className="vision__left__vision">
                        Vision
                    </h1>
                </span>
                <p className="vision__body">
                    Our vision is to create better life for many Students in the field of Technology. We aim to Fill the gap that prevents students to become industry ready. It is a community for those students whole desire to learn and grow themselves with others. Technology is what aspires us and we continue to make this world a happy place.
                </p>
            </div>
            <div className="vision__right">
                <img src={visionImage} alt="Vision" />
            </div>
        </div>
    )
}

export default Vision
