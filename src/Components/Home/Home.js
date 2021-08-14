import React from 'react'
import './Home.css';
import Growth from './GrowthPart/Growth'
import Vision from './Vision/Vision';
import BuildFuture from './BuildFuture/BuildFuture';
import Mission from './Mission/Mission';
import Testimonials from './Testimonials/Testimonials';
import Impact from './Impact/Impact';

function Home() {

    return (
        <div className='home'>
            <BuildFuture />
            <Vision />
            <Mission />
            <Impact />
            <Growth />
            <Testimonials />
        </div>
    )
}

export default Home
