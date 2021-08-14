import React, { useState, useEffect } from 'react'
import './Growth.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimateGrowth from './AnimateGrowth';

function Growth() {
    const [loader, setLoader] = useState(false);

    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className='growth' data-aos='zoom-in-up' onMouseEnter={() => setLoader(true)} onMouseLeave={() => setLoader(false)}>
            <div className="growth__info">
                <h1 className="growth__quick">
                    We are Growing Quickly
                </h1>
                <p className='growth__quickPara'>
                    We're dedicated to improving the experience and performance of the developers.
                </p>
            </div>
            <div className="growth__parts">
                <div className="growth__left" style={{ width: 250, height: 250 }}>
                    <AnimateGrowth loader={loader} valueStart={0} valueEnd={82} >
                        {(value) => (
                            <CircularProgressbarWithChildren
                                className='back'
                                value={value}
                                // text={`${value}%`}
                                styles={{
                                    trail: {
                                        stroke: '#273d28',
                                        strokeLinecap: "butt",
                                        transform: "rotate(-126deg)",
                                        transformOrigin: "center center",
                                    },
                                    path: {
                                        strokeLinecap: "butt",
                                        transform: "rotate(1.0turn)",
                                        transition: 'stroke-dashoffset 3s ease 0s',
                                        transformOrigin: "center center",
                                        stroke: "#35db3a",
                                    },
                                }}
                            >
                                <div className="growth__progressBody">
                                    <p>1300+</p>
                                    <i className="fas fa-users"></i>
                                    <p>Participants</p>
                                </div>
                            </CircularProgressbarWithChildren>
                        )}
                    </AnimateGrowth>
                </div>
                <div className="growth__middle" style={{ width: 250, height: 250 }}>
                    <AnimateGrowth loader={loader} valueStart={0} valueEnd={71}>
                        {(value) => (
                            <CircularProgressbarWithChildren
                                className='back'
                                value={value}
                                // text={`${value}%`}
                                styles={{
                                    trail: {
                                        stroke: "#285052",
                                        strokeLinecap: "butt",
                                        transform: "rotate(-126deg)",
                                        transformOrigin: "center center",
                                    },
                                    path: {
                                        strokeLinecap: "butt",
                                        transform: "rotate(1.0turn)",
                                        transition: 'stroke-dashoffset 3s ease 0s',
                                        transformOrigin: "center center",
                                        stroke: "#35d6db",
                                    },
                                }}
                            >
                                <div className="growth__progressBody">
                                    <p>30+</p>
                                    <i className="fas fa-mail-bulk"></i>
                                    <p>Workshops</p>
                                </div>
                            </CircularProgressbarWithChildren>
                        )}
                    </AnimateGrowth>
                </div>
                <div className="growth__right" style={{ width: 250, height: 250 }}>
                    <AnimateGrowth loader={loader} valueStart={0} valueEnd={33}>
                        {(value) => (
                            <CircularProgressbarWithChildren
                                className='back'
                                value={value}
                                // text={`${value}%`}
                                styles={{
                                    trail: {
                                        stroke: "#613f32",
                                        strokeLinecap: "butt",
                                        transform: "rotate(-126deg)",
                                        transformOrigin: "center center",
                                    },
                                    path: {
                                        strokeLinecap: "butt",
                                        transform: "rotate(1.0turn)",
                                        transition: 'stroke-dashoffset 3s ease 0s',
                                        transformOrigin: "center center",
                                        stroke: "#e03f23",
                                    },
                                    text: {
                                        fill: '#fff',
                                        fontSize: '10px',
                                    },
                                }}
                            >
                                <div className="growth__progressBody">
                                    <p>2+</p>
                                    <i className="fas fa-trophy"></i>
                                    <p>Hackathons</p>
                                </div>
                            </CircularProgressbarWithChildren>
                        )}
                    </AnimateGrowth>
                </div>
            </div>
        </div>
    )
}

export default Growth
