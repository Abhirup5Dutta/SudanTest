import React from 'react'
import './Mission.css';
import StarsIcon from '@material-ui/icons/Stars';
import { IconButton } from '@material-ui/core';

function Mission() {
    return (
        <div className='mission'>
            <span className="mission__head">
                <h1 className="mission__our">
                    Our
                </h1>
                &nbsp;
                &nbsp;
                <h1 className="mission__mission">
                    Mission
                </h1>
            </span>
            <p className="mission__para">
                We are trying to change lives by imparting tech education and relevant skills
            </p>
            <div className="mission__body">
                <div className="mission__awareness">
                    <IconButton>
                        <StarsIcon style={{ color: 'white', marginBottom: '10px' }} fontSize='large' />
                    </IconButton>
                    <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '15px' }}>Awareness About Tech</h1>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}>
                        Help us reach tier-two and tier-three cities where people do not know how tech education can change their lives.
                    </p>
                </div>
                <div className="mission__scholarship">
                    <IconButton>
                        <StarsIcon style={{ color: 'white', marginBottom: '10px' }} fontSize='large' />
                    </IconButton>
                    <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '15px' }}>Scholarship And Fellowship</h1>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}>
                        Getting recognized is an important part of anyone's career. We guide you exactly where you fit in.
                    </p>
                </div>
                <div className="mission__mentor">
                    <IconButton>
                        <StarsIcon style={{ color: 'white', marginBottom: '10px' }} fontSize='large' />
                    </IconButton>
                    <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '15px' }}>Young And Enthusiastic Mentor</h1>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}>
                        Finding like minded people who resonate with your goal is extremely important. Find such enthusiastic people through our network.
                    </p>
                </div>
                <div className="mission__diversity">
                    <IconButton>
                        <StarsIcon style={{ color: 'white', marginBottom: '10px' }} fontSize='large' />
                    </IconButton>
                    <h1 style={{ color: 'white', textAlign: 'center', marginBottom: '15px' }}>Diversity</h1>
                    <p style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}>
                        Know how Diversity and Inclusion can play an important role in generating ideas, team building and getting the maximum output.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Mission
