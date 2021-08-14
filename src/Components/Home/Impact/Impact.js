import React, { useState, useEffect } from 'react'
import './Impact.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import employImage from '../../../Assets/employ-image.png';
import helpImage from '../../../Assets/help-image.png';
import projectImage from '../../../Assets/project-learning.png';
import scheduleImage from '../../../Assets/schedule-image.png';

function Impact() {

    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1024) {
                setMobile(true);
            } else {
                setMobile(false);
            }
        }

        window.addEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (window.innerWidth <= 1024) {
            setMobile(true);
        } else {
            setMobile(false);
        }
        Aos.init({ duration: 3000 });
    }, []);

    return (
        <div className='impact'>
            <h1 className="impact__heading">
                HOW WE&nbsp; <span>IMPACT</span>
            </h1>
            <div className="impact__body">
                <div className="impact__left">
                    <div className="impact__project" data-aos='fade-right'>
                        <h1>
                            Project Based Learning
                        </h1>
                        <p>
                            Learning through practice has always created more impact than theoritical knowledge. We provide hands-on experience on real world projects which lead to mastering the skills reruired.
                        </p>
                    </div>
                    <div className="impact__employImg" data-aos={mobile ? 'none' : 'fade-right'}>
                        <img src={employImage} alt="Employable Skills" />
                    </div>
                    <div className="impact__schedule" data-aos='fade-right'>
                        <h1>
                            Learn on your Schedule
                        </h1>
                        <p>
                            Are you not able to cope up with the timelines? Don't worry, we understand your problem. Our courses are self-paced courses which you can view at anytime and anywhere at your comfort.
                        </p>
                    </div>
                    <div className="impact__helpImg" data-aos={mobile ? 'none' : 'fade-right'}>
                        <img src={helpImage} alt="Help" />
                    </div>
                </div>
                <div className="impact__middle">
                    <div className="impact__purple" style={{ backgroundColor: 'purple', borderRadius: '7px 7px 0px 0px' }}>

                    </div>
                    <div className="impact__yellow" style={{ backgroundColor: 'yellow' }}>

                    </div>
                    <div className="impact__green" style={{ backgroundColor: 'green' }}>

                    </div>
                    <div className="impact__lightViolet" style={{ backgroundColor: 'violet', borderRadius: '0px 0px 7px 7px' }}>

                    </div>
                </div>
                <div className="impact__right">
                    <div className="impact__projectImg" data-aos={mobile ? 'none' : 'fade-left'}>
                        <img src={projectImage} alt="Project Based Learning" />
                    </div>
                    <div className="impact__employ" style={mobile ? { marginTop: '0' } : { marginTop: '-2.5rem' }} data-aos='fade-left'>
                        <h1>
                            Get real, employable skills
                        </h1>
                        <p>
                            Skills are what really matters in industry when it comes to work. Doing our courses not only help you to master that skill but get real Industry ready and provide more opportunity.
                        </p>
                    </div>
                    <div className="impact__scheduleImg" data-aos={mobile ? 'none' : 'fade-left'}>
                        <img src={scheduleImage} alt="Learn Schedule" />
                    </div>
                    <div className="impact__help" style={mobile ? { marginTop: '0' } : { marginTop: '-2.5rem' }} data-aos='fade-left'>
                        <h1>
                            The help you need, when you need it
                        </h1>
                        <p>
                            Got Stuck in a Problem ? Don't worry ! We are having a large Community support of Students, Industry Mentors for your support and helping you to solve your problem quickly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Impact
