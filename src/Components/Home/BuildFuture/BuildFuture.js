import React, { useEffect } from 'react'
import './BuildFuture.css';
// import Aos from 'aos';
// import 'aos/dist/aos.css';
import buildFutureImage from '../../../Assets/buildFuture.png';

function BuildFuture() {

    // useEffect(() => {
    //     Aos.init({ duration: 2000 });
    // }, []);

    return (
        <div className='buildFuture'>
            <div className="buildFuture__left">
                <div className="buildFuture__heading">
                    <h1 className="buildFuture__whiteHeading">
                        Build Your Future
                    </h1>
                    <h1 className="buildFuture__colorHeading">
                        With Us
                    </h1>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta autem tempora odit illum repellendus eligendi, earum deserunt ex dolores inventore consequatur cum ea, tenetur aliquid.
                </p>
                <a href="https://discord.gg/8pJZQAAFMT" rel="noreferrer" target="_blank">
                    <button class="btn btn-background-slide">
                        <span className='buildFuture__Slide'>
                            <i className="fab fa-discord"></i>
                            Join Discord
                        </span>
                    </button>
                </a>
            </div>
            <div className="buildFuture__right" >
                <img src={buildFutureImage} alt="Build Future" />
            </div>
        </div>
    )
}

export default BuildFuture
