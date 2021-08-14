import React from 'react'
import './CampusFirst.css';
import CampusFirstImage from '../../../Assets/campusFirstImage.jpg';

function CampusFirst() {
    return (
        <div className='campusFirst'>
            <div className="campusFirst__left">
                <div className="campusFirst__leftDiv">
                    <h1>Campus Leader</h1>
                    <hr style={{ color: 'white', height: '2px' }} />
                    <p>
                        Who actually is  a Campus Leader?
                        <br />
                        Campus Leaders at Sudan's Tech are Like minded people with a growth mindset who want to add value to the community by spreading knowledge and awareness about the Community and Team up with like-minded people to work towards the Motive.
                    </p>
                    <button className='campusFirst__leftButton'>APPLY NOW</button>
                </div>
            </div>
            <div className="campusFirst__right">
                <img className='campusFirst__right__image' src={CampusFirstImage} alt="CampusImage" />
            </div>
        </div>
    )
}

export default CampusFirst
